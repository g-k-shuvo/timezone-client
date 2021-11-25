import { useEffect, useState } from "react";

const useWatch = (id) => {
  const [watch, setWatch] = useState({});

  useEffect(() => {
    fetch(`https://secure-sierra-53556.herokuapp.com/watches/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWatch(data);
      });
  }, [id]);
  return { watch };
};

export default useWatch;
