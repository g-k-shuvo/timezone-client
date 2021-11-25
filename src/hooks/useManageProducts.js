import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useManageProducts = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://secure-sierra-53556.herokuapp.com/watches")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAllProducts(data);
      });
  }, []);

  const removeProduct = (id) => {
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
        fetch(`https://secure-sierra-53556.herokuapp.com/watches/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const productsAfterDelete = allProducts.filter(
                (booking) => booking._id !== id
              );
              setAllProducts(productsAfterDelete);
            } else {
              Swal.fire("Opps!", "Something Went Wrong", "error");
            }
          });
        Swal.fire("Deleted!", "Product Has Been Deleted", "success");
      }
    });
  };

  return { loading, allProducts, removeProduct };
};
export default useManageProducts;
