"use client";
import React, { useEffect, useState } from "react";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/featurejob.json");
      const data = await res.json();
    };

    fetchData();
  }, []);
  console.log(jobs);
  return <div>Hello</div>;
};

export default FeaturedJob;
