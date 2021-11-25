import { useEffect, useState } from "react";

const useReviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://secure-sierra-53556.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setReviews(data);
      });
  }, []);
  return { loading, reviews };
};

export default useReviews;
