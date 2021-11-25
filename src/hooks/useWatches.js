import { useEffect, useState } from "react";

const useWatches = () => {
  const [loading, setLoading] = useState(true);
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("https://secure-sierra-53556.herokuapp.com/watches")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setWatches(data);
      });
  }, []);
  return { loading, watches };
};

export default useWatches;
