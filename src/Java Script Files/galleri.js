import React, { useEffect } from "react";

const FilterComponent = () => {
  useEffect(() => {
    const filterEvent = document.querySelector(".btns-group");
    const filterImg = document.querySelectorAll(".image");

    const handleClick = (selectedEvent) => {
      if (selectedEvent.target.classList.contains("buttons")) {
        filterEvent.querySelector(".active").classList.remove("active");
        selectedEvent.target.classList.add("active");

        let filterData = selectedEvent.target.getAttribute("data-name");

        filterImg.forEach((image) => {
          let filterImages = image.getAttribute("data-name");

          if (filterImages === filterData || filterData === "all") {
            image.classList.remove("hide");
            image.classList.add("show");
          } else {
            image.classList.add("hide");
            image.classList.remove("show");
          }
        });
      }
    };

    filterEvent.addEventListener("click", handleClick);

    return () => {
      filterEvent.removeEventListener("click", handleClick);
    };
  }, []);

  return <div>{/* Isi komponen sesuai kebutuhan */}</div>;
};

export default FilterComponent;
