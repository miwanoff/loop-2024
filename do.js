let n = 0;
n = +prompt("Купіть квиток");
do {
  alert("залишок " + n + " Їду ще одне коло");
  n = n + 5;
  n += 5;
  n++;
} while (n < 20);
alert("Ви приїхали");
