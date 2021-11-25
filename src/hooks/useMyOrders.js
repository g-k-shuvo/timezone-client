import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const useMyOrders = () => {
  const [loading, setLoading] = useState(true);
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  const { email } = user;

  useEffect(() => {
    fetch(`https://secure-sierra-53556.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMyOrders(data);
      });
  }, [email]);

  const removeOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
              const ordresAfterDelete = myOrders.filter(
                (order) => order._id !== id
              );
              setMyOrders(ordresAfterDelete);
            } else {
              Swal.fire("Opps!", "Something Went Wrong", "error");
            }
          });
        Swal.fire("Deleted!", "Order Has Been Deleted!", "success");
      }
    });
  };

  return { loading, myOrders, removeOrder };
};

export default useMyOrders;
