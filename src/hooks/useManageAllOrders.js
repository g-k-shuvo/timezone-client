import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

const useManageAllOrders = () => {
  const [loading, setLoading] = useState(true);
  const [allOrders, setAllOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://secure-sierra-53556.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAllOrders(data);
      });
  }, []);

  const removeOrder = (id) => {
    Swal.fire({
      title: "Are You Yure?",
      text: "You Won't Be Able To Revert This!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://secure-sierra-53556.herokuapp.com/orders/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const bookingsAfterDelete = allOrders.filter(
                (booking) => booking._id !== id
              );
              setAllOrders(bookingsAfterDelete);
            } else {
              Swal.fire("Opps!", "Something Went Wrong", "error");
            }
          });
        Swal.fire("Deleted!", "Order Has Been Removed", "success");
      }
    });
  };

  const updateStatus = (id) => {
    const order = allOrders.find((order) => order._id === id);
    if (order.status === "shipped") {
      order.status = "pending";
    } else if (order.status === "pending") {
      order.status = "shipped";
    }
    const url = `https://secure-sierra-53556.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Status Updated!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        history.push("/");
      });
  };

  return { loading, allOrders, removeOrder, updateStatus };
};
export default useManageAllOrders;
