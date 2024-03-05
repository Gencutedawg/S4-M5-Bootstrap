const tableCells = document.querySelectorAll('.pricing-table td');

tableCells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = '#eee';
  });

  cell.addEventListener('mouseout', () => {
    cell.style.backgroundColor = '';
  });
});
