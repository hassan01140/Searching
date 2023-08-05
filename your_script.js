// Mobile phone data object
const mobiles = [
   
        {
            name: "IPhone11",
            company: "Apple",
            ram: "4gb",
            rom: "64gb",
            camera: "12px",
            price: "100,000 PKR"
        },
        {
            name: "IPhone12",
            company: "Apple",
            ram: "4gb",
            rom: "64gb",
            camera: "12px",
            price: "150,000 PKR"
        },
        {
            name: "IPhone13",
            company: "Apple",
            ram: "6gb",
            rom: "128gb",
            camera: "24px",
            price: "200,000 PKR"
        },
        {
            name: "Samsung A10",
            company: "Samsung",
            ram: "4gb",
            rom: "64gb",
            camera: "13px",
            price: "22,000 PKR"
        },
        {
            name: "Samsung A20",
            company: "Samsung",
            ram: "4gb",
            rom: "64gb",
            camera: "18px",
            price: "28,000 PKR"
        },
        {
            name: "Samsung A30",
            company: "Samsung",
            ram: "4gb",
            rom: "64gb",
            camera: "25px",
            price: "29,000 PKR"
        },
        {
            name: "OppoV20",
            company: "Oppo",
            ram: "8gb",
            rom: "128gb",
            camera: "64px",
            price: "54,999 PKR"
        },
        {
            name: "OppoF19",
            company: "Oppo",
            ram: "6gb",
            rom: "128gb",
            camera: "48px",
            price: "36,999 PKR"
        },
        {
            name: "OppoF11",
            company: "Oppo",
            ram: "4gb",
            rom: "64gb",
            camera: "48px",
            price: "35,999 PKR"
        },
        {
            name: "VivoY20",
            company: "Vivo",
            ram: "4gb",
            rom: "64gb",
            camera: "13px",
            price: "26,999 PKR"
        },
        {
            name: "VivoY21",
            company: "Vivo",
            ram: "4gb",
            rom: "64gb",
            camera: "13px",
            price: "43,999 PKR"
        },
        {
            name: "VivoY55",
            company: "Vivo",
            ram: "8gb",
            rom: "128gb",
            camera: "50px",
            price: "64,999 PKR"
        }
    ]
    // Add more companies and their mobiles and prices here

  
  // Function to display selected company's mobiles and prices
  function filterMobiles() {
    const searchBy = document.getElementById('searchByDropdown').value;
    const searchTerm = document.getElementById('searchInput').value;
  
    const filteredMobiles = mobiles.filter(mobile => mobile[searchBy]);
  
    displayResults(filteredMobiles);
  }
  
  function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
  
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No matching mobile phones found.</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    results.forEach(mobile => {
      const li = document.createElement('li');
      li.textContent = `${mobile.company} ${mobile.name} - Price: $${mobile.price} - Camera: ${mobile.camera} - RAM: ${mobile.ram} - ROM: ${mobile.rom}`;
      ul.appendChild(li);
    });
  
    resultsContainer.appendChild(ul);
  }