fetch("companies.json")
  .then((response) => response.json())
  .then((companies) => {
    const companyList = document.getElementById("company-list");

    companies.forEach((company) => {
      const listItem = document.createElement("li");
      listItem.className = "company-item";

      const link = document.createElement("a");
      link.href = company.link;
      link.textContent = company.name;
      link.target = "_blank"; // Open link in a new tab
      link.className = "company-link";

      const description = document.createElement("p");
      description.textContent = company.description;
      description.className = "company-description";

      listItem.appendChild(link);
      listItem.appendChild(description);
      companyList.appendChild(listItem);

      listItem.addEventListener("click", () => {
        window.open(company.link, "_blank");
      });
    });
  })
  .catch((error) => console.error("Error fetching companies:", error));
