<template>
  <div class="About">
    <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
    <p class="h3 my-0 me-md-auto fw-normal">MIDORI-SHOP</p>
    <nav class="my-2 my-md-0 me-md-3">
    <router-link to="/" class="p-2 text-dark" > SHOP </router-link>
    </nav>
    <router-link to="/about" class="btn btn-outline-primary">ตระกร้าสินค้า</router-link>
    </header>
    <h1 class=text-center >รายการสินค้า</h1>
    <header class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
    <div v-if="$store.state.i1.amount >= 1">
    <img :src="$store.state.i1.image" width="100" >
    <p1> {{$store.state.i1.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i1.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i1.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i1.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i2.amount >= 1">
    <img :src="$store.state.i2.image" width="100">
    <p1> {{$store.state.i2.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i2.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i2.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i2.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i3.amount >= 1">
    <img :src="$store.state.i3.image" width="100">
    <p1> {{$store.state.i3.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i3.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i3.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i3.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i4.amount >= 1">
    <img :src="$store.state.i4.image" width="100">
    <p1> {{$store.state.i4.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i4.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i4.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i4.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i5.amount >= 1">
    <img :src="$store.state.i5.image" width="100">
    <p1> {{$store.state.i5.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i5.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i5.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i5.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i6.amount >= 1">
    <img :src="$store.state.i6.image" width="100">
    <p1> {{$store.state.i6.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i6.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i6.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i6.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i7.amount >= 1">
    <img :src="$store.state.i7.image" width="100">
    <p1> {{$store.state.i7.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i7.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i7.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i7.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i8.amount >= 1">
    <img :src="$store.state.i8.image" width="100">
    <p1> {{$store.state.i8.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i8.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i8.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i8.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i9.amount >= 1">
    <img :src="$store.state.i9.image" width="100">
    <p1> {{$store.state.i9.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i9.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i9.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i9.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i10.amount >= 1">
    <img :src="$store.state.i10.image" width="100">
    <p1> {{$store.state.i10.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i10.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i10.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i10.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i11.amount >= 1">
    <img :src="$store.state.i11.image" width="100">
    <p1> {{$store.state.i11.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i11.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i11.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i11.amount -= 1">ลบ</button>
    </div>
    <div v-if="$store.state.i12.amount >= 1">
    <img :src="$store.state.i12.image" width="100">
    <p1> {{$store.state.i12.name}} </p1>
    <button type="button" class="btn btn-primary" v-on:click= "$store.state.i12.amount += 1">เพิ่ม</button> 
    <p2> x{{$store.state.i12.amount}} </p2>
    <button type="button" class="btn btn btn-danger" v-on:click= "$store.state.i12.amount -= 1">ลบ</button>
    </div>
    </header>
    <h2 class=text-center > ราคารวม {{$store.state.sum+$store.state.i1.amount*$store.state.i1.price+
        $store.state.i2.amount*$store.state.i2.price+$store.state.i3.amount*$store.state.i3.price+
        $store.state.i4.amount*$store.state.i4.price+$store.state.i5.amount*$store.state.i5.price+
        $store.state.i6.amount*$store.state.i6.price+$store.state.i7.amount*$store.state.i7.price+
        $store.state.i8.amount*$store.state.i8.price+$store.state.i9.amount*$store.state.i9.price+
        $store.state.i10.amount*$store.state.i10.price+$store.state.i11.amount*$store.state.i11.price+
        $store.state.i12.amount*$store.state.i12.price
      }} บาท </h2>
  </div>
</template>
