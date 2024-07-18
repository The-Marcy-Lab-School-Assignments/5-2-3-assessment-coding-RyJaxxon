const bankAccountFactory = (initialBalance) => {
  let balance = initialBalance === undefined ? 0 : initialBalance;
  
  return {
    checkBalance : function () {
      return balance;
    },
    add : function (amount) {
      balance += amount;
      console.log(`$${amount} added.`);
    },
    subtract : function (amount) {
      balance -= amount;
      console.log(`$${amount} subtracted.`);
    }
  };
};


module.exports = {
  bankAccountFactory,
};
