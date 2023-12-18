/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryAndSpend = [];
  const m = new Map();

  for (let i = 0; i < transactions.length; i++) {
    let currCategory = transactions[i].category;
    let currPrice = transactions[i].price;

    // Check if the category exists in the map
    if (!m.has(currCategory)) {
      m.set(currCategory, currPrice);
    } else {
      // Update the existing value for the category
      m.set(currCategory, m.get(currCategory) + currPrice);
    }
  }

  m.forEach((value, key) => {
    let temp = { category: key, totalSpent: value };
    categoryAndSpend.push(temp);
  });

  return categoryAndSpend;
}

module.exports = calculateTotalSpentByCategory;
