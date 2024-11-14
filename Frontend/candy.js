document.getElementById('saveBtn').addEventListener('click', function() {
    const productName = document.getElementById('productName').value;
    const productModel = document.getElementById('productModel').value;
    const productStatus = document.getElementById('productStatus').value;
    const tracking = document.getElementById('tracking').value;
  
    if(productName && productModel && productStatus && tracking) {
      // Create a new row
      const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();
  
      // Insert cells for each piece of data
      const nameCell = newRow.insertCell(0);
      const modelCell = newRow.insertCell(1);
      const statusCell = newRow.insertCell(2);
      const trackingCell = newRow.insertCell(3);
  
      // Fill the cells with input values
      nameCell.innerHTML = productName;
      modelCell.innerHTML = productModel;
      statusCell.innerHTML = productStatus;
      trackingCell.innerHTML = tracking;
  
      // Clear input fields after saving
      document.getElementById('productName').value = '';
      document.getElementById('productModel').value = '';
      document.getElementById('productStatus').value = '';
      document.getElementById('tracking').value = '';
  
    } else {
      alert('กรุณากรอกข้อมูลเดี๋ยวนี้');
    }
  });
  