class Phone {
  constructor(phoneNumber){
    this.phoneNumber = phoneNumber;
    this.contacts = []
  }
  
  addContact(obj){
    if (obj.phoneNumber === undefined || obj.name === undefined || obj.phoneNumber.length !== 10){
      return `Invalid`
    } else {
      const newContact = obj
      this.contacts.push(newContact)
      return `${obj.name} added.`
    }
  } 
  
  removeContact(name){
    const index = this.contacts.findIndex(contact => contact.name === name)
    if (index === -1){
      return `Contact not found.`
    } else {
      this.contacts.splice(index,1);
      return `${name} removed.`
    }
  }

  makeCall(input){
    const index = this.contacts.findIndex(contact => contact.name === input || contact.phoneNumber === input)
    if (index === -1 && input.length !== 10){
      return `Invalid`
    } else if (index === -1 && input.length === 10){
      return `Calling ${input}...`
    } else {
      return `Calling ${this.contacts[index].name}...`
    }
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model){
    super(phoneNumber)
    this.model = model;
  }
  sendIMessage(phone, message){
    if (!(phone instanceof AppleIPhone)){
      return `Message could not be sent.`
    } else {
      return `Message: ${message} - sent from ${this.model}`
    }
  }

}

module.exports = {
  Phone,
  AppleIPhone,
};
