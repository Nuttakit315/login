import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  i1:{
      name:"MIDORI ทวินไซส์ สีเทาเข้ม",
      price:"1000",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS13624156.jpg?impolicy=resize&width=553"
  },
  i2:{
      name:"MIDORI คิงไซส์ สีขาว",
      price:"1450",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS13623869.jpg?impolicy=resize&width=553"
  },
  i3:{
      name:"MIDORI คิงไซส์ SAN",
      price:"1250",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS12683949.jpg?impolicy=resize&width=553"
  },
  i4:{
      name:"MIDORI ควีนไซส์ สีน้ำตาลเข้ม",
      price:"1500",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS13623746.jpg?impolicy=resize&width=553"
  },
  i5:{
      name:"MIDORI คิงไซส์ สีทอง",
      price:"1700",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS13623692.jpg?impolicy=resize&width=553"
  },
  i6:{
      name:"MIDORI คิงไซส์ London",
      price:"1700",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS13963972.jpg?impolicy=resize&width=553"
  },
  i7:{
      name:"MIDORI คิงไซส์ สีช็อคโกแลต",
      price:"1790",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS14169380.jpg?impolicy=resize&width=553"
  },
  i8:{
      name:"MIDORI ทวินไซส์ USA",
      price:"1400",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS13157616.jpg?impolicy=resize&width=553"
  },
  i9:{
      name:"MIDORI ทวินไซส์ ลายดอกA",
      price:"700",
      amount:0,
      image:"https://backend.central.co.th/media/catalog/product/C/D/CDS12684090.jpg?impolicy=resize&width=553"
  },
  i10:{
    name:"MIDORI ทวินไซส์ ลายดอกB",
    price:"700",
    amount:0,
    image:"https://backend.central.co.th/media/catalog/product/C/D/CDS13157692.jpg?impolicy=resize&width=553"
  },
  i11:{
    name:"MIDORI ทวินไซส์ ลายพิมพ์A",
    price:"1900",
    amount:0,
    image:"https://backend.central.co.th/media/catalog/product/C/D/CDS12684168.jpg?impolicy=resize&width=553"
  },
  i12:{
    name:"MIDORI ทวินไซส์ ลายพิมพ์B",
    price:"1900",
    amount:0,
    image:"https://backend.central.co.th/media/catalog/product/C/D/CDS13157760.jpg?impolicy=resize&width=553"
  },
  sum: 0 ,
  say: function (message) {
    alert(message)
  }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
