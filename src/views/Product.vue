<template>
  <div id="Product">
  <main class="container">
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i1.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i1.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i1.price}} บาท</ul>
  <div id="example-1">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i1.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')"  >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i1.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i2.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i2.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i2.price}} บาท</ul>
  <div id="example-2">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i2.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i2.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i3.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i3.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i3.price}} บาท</ul>
  <div id="example-3">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i3.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i3.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i4.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i4.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i4.price}} บาท</ul>
  <div id="example-1">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i4.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i4.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i5.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i5.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i5.price}} บาท</ul>
  <div id="example-2">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i5.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i5.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i6.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i6.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i6.price}} บาท</ul>
  <div id="example-3">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i6.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i6.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i7.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i7.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i7.price}} บาท</ul>
  <div id="example-1">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i7.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i7.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i8.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i8.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i8.price}} บาท</ul>
  <div id="example-2">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i8.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i8.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i9.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i9.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i9.price}} บาท</ul>
  <div id="example-3">
  <i class="bi bi-patch-plus"></i>
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i9.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i9.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i1.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i10.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i10.price}} บาท</ul>
  <div id="example-1">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i10.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i10.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i11.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i11.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i11.price}} บาท</ul>
  <div id="example-2">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i11.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i11.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
  <h4 class="my-0 fw-normal">{{$store.state.i12.name}}</h4>
  </div>
  <div class="card-body">
  <img :src="$store.state.i12.image" width="240">
  <ul class="list-unstyled text-small">{{$store.state.i12.price}} บาท</ul>
  <div id="example-3">
  <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.i12.amount += 1,$store.state.say('เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า')" >เพิ่มสินค้า</button>
  <p>จำนวน {{$store.state.i12.amount}} เซ็ต </p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>>