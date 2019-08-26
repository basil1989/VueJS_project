<template>
  <div class="hello">
    <b-container class="bv-example-row">
    <b-row class="gambar_atas">
        <b-col md="6" > <b-img center style="width:80%" v-bind:src="img_1" fluid alt="Responsive image" /></b-col>
        <b-col class="testing" md="6"><p style="color:#0100F0 ;font-size:30px"><b>Travling</b></p><p style="margin-top:-15px;" class="">An all-in-one digital platform that you need to discover comprehensive and updated information for traveling activities in Yogyakarta. Travling provides the information of more than 150 tourist destinations, both the most popular and hidden ones. You will find information such as the most optimised itinerary, ticket price, opening hours, facilities, and tips. Get Travling for your smartphone to make traveling easier!
      </p>
       <a style="text-decoration:none" href="#my-id"><button class="button_special button_special_hover" type="button">Find More</button></a>
        </b-col>
    </b-row>
    </b-container>
    <b-img class="header_1" style="width:100%;" v-bind:src="img_2"></b-img>
    <div id="my-id" class="yoi">
      <b-container class="bv-example-row">
      <b-row>
        <b-col class="why_travling" md="12"><p class="why_travling_title" ><b>Why Travling ?</b></p><br><p class="why_travling_description">Travling Provides The Best Information That You Can Get
</p></b-col>
      </b-row>
      </b-container>

      <b-container class="bv-example-row">
      <b-row style="text-align:center;margin-top:50px;">
        <b-col class="why_us" md="4">
          <b-img style="width:100px" v-bind:src="img_3"></b-img><br>
          <p class="title_why_us"><b>Fleksibel</b></p><br>
          <p class="detail_why_us">Personalise your itinerary, as you wish.We’re ready to serve you anytime and anywhere.</p>
        </b-col>
        <b-col class="why_us" md="4">
          <b-img style="width:100px" v-bind:src="img_4"></b-img><br>
          <p class="title_why_us"><b>Simple </b></p><br>
          <p class="detail_why_us">Plan your itinerary up to 10 tourist destinations. Build up your desired trip, get ready, and get travel!</p>
        </b-col>
        <b-col class="why_us" md="4">
          <b-img style="width:100px" v-bind:src="img_5"></b-img><br>

          <p class="title_why_us"><b>Complete</b></p><br>
          <p class="detail_why_us">Comprehensive and updated information, in one app. Don't need to bother both to do research from various websites.</p>
        </b-col>
      </b-row>
      </b-container>
    </div>
    <b-img style="width:100%;margin-top:-5px" v-bind:src="img_6" ></b-img>

    <div class="yoa">
      <b-container class="bv-example-row">
      <b-row>
        <b-col style="margin-top:50px" md="12"><p class="feature_title"><b>What’s Great In Travling ? </b></p><br><p class="feature_description">Here’s 4 awesome feature in travling</p></b-col>
      </b-row>
      </b-container>
      <b-container style="margin-top:50px" class="bv-example-row">
      <b-row>
        <b-col md="6">
        <b-img class="feature_1"  center v-bind:src="img_7"></b-img>
        <carousel  :loop="true" :responsive="false" :items="1" :nav="false" :dots="false" :autoplay="true" :autoplayTimeout="3000"  class="slide_hp">
        <b-img  style="width:100%" v-bind:src="img_8"></b-img>
        <b-img style="width:100%" v-bind:src="img_9"></b-img>
        <b-img style="width:100%" v-bind:src="img_10"></b-img>
        </carousel>
        </b-col>
          <b-col  md="6"><p class="explore"><b>Explore Destination</b></p><p class="explore_detail">
            We provide the superior information you need including exclusive footage from the location.  
            You can explore more than 100 destinations that have been classified based on categories. 
            Choose your personal preference destination up to 10 locations. Let us optimise the route and you’re ready to travel.
          </p>
          <b-row >
            <b-col class="icon_1"><b-img style="width:30px" v-bind:src="img_11"></b-img><span class="text">&nbsp; Hutan</span></b-col>
            <b-col class="icon_1"><b-img style="width:30px" v-bind:src="img_12"></b-img><span class="text">&nbsp; Museum</span></b-col>
            <b-col class="icon_1"><b-img style="width:30px" v-bind:src="img_13"></b-img><span class="text">&nbsp; Gunung</span></b-col>
          </b-row>
          <b-row style="margin-top:20px;">
            <b-col class="icon_1"><b-img style="width:30px" v-bind:src="img_14"></b-img><span class="text">&nbsp; Kuliner</span></b-col>
            <b-col class="icon_1"><b-img style="width:30px" v-bind:src="img_15"></b-img><span class="text">&nbsp; Pantai</span></b-col>
            <b-col class="icon_1"><b-img style="width:30px" v-bind:src="img_16"></b-img><span class="text">&nbsp; Edukasi</span></b-col>
          </b-row>
          <b-row style="margin-top:20px;">
            <b-col class="icon_1"><b-img  style="width:30px" v-bind:src="img_17"></b-img><span class="text">&nbsp; Alam</span></b-col>
            <b-col class="icon_1"><b-img style="width:30px" v-bind:src="img_18"></b-img><span class="text">&nbsp; Agama</span></b-col>
            <b-col class="icon_1"><b-img class="icon_1"  v-bind:src="travee_f"></b-img><span class="text"> &nbsp; Dll</span></b-col>
          </b-row>
          </b-col>
      </b-row>
      </b-container>
      </div>
      <div class="yoi2">
        <b-container style="margin-top:50px" class="bv-example-row yae">
        <b-row >
          <b-col md="6" class="yae_hide" >
            <b-img center class="feature_2" v-bind:src="img_19"></b-img>
            <carousel :loop="true" :responsive="false" :items="1" :mouseDrag="false" :touchDrag="false" :pullDrag="false" :freeDrag="false" :nav="false" :dots="false" :autoplay="true" :autoplayTimeout="3000" class="slide_hp_2">
            <b-img  style="width:100%" v-bind:src="img_8"></b-img>
            <b-img style="width:100%" v-bind:src="img_9"></b-img>
            <b-img style="width:100%" v-bind:src="img_10"></b-img>
            </carousel>
          </b-col>
            <b-col class="yae" md="6">
              <carousel :nav="false" :items="1">
                <b-col><p class="explore_2"><b>Destination Research</b></p><br>
                  <p class="detail_explore_2">Overwhelmed by so many destination choices? We will provide you recommendation </p>
                </b-col>
                <b-col><p class="explore_2"><b>Review</b></p><br>
                  <p class="detail_explore_2">How was your journey ? Write down your review and give a rating. By sharing your story, it will be useful for other users and the management of the location .</p>
                </b-col>
                <b-col><p class="explore_2"><b>Level and Badge</b></p><br>
                  <p class="detail_explore_2">Are you a travel geek? We give you reward for every points you get from rating, review, and photos from your trip with us. Get your level up and get badges. Go tell your friends to join! </p>
                </b-col>
              </carousel>
            </b-col>
            <b-col class="yae2" md="6">
              <b-img center style="width:90%" v-bind:src="img_19"></b-img>
              <carousel :loop="true" :responsive="false" :items="1" :mouseDrag="false" :touchDrag="false" :pullDrag="false" :freeDrag="false" :nav="false" :dots="false" :autoplay="true" :autoplayTimeout="3000" class="slide_hp_2">
              <b-img  style="width:100%" v-bind:src="img_22"></b-img>
              <b-img style="width:100%" v-bind:src="img_21"></b-img>
              <b-img style="width:100%" v-bind:src="img_20"></b-img>
              </carousel>
            </b-col>
        </b-row>
        </b-container>
      </div>
      <!-- :style="{ backgroundImage: 'url(' + bc_image_1 + ')' }" -->
  
      <b-img class="awan"  v-bind:src="awan"></b-img>

      <div class="yoi3">
        <b-img  class="mtt_bc" v-bind:src="bc1"></b-img>
        <b-container class="bv-example-row yae">
          <b-row>
            <b-col style="margin-top:50px" md="12"><p class="mtt_title"><b>Meet Your Travel Partner </b></p><br><p class="mtt_des">They are Travaa, Travee, & Travoo</p></b-col>
          </b-row>
        </b-container>
              <b-container class="bv-example-row">
        <b-row style="margin-top:100px">
          <b-col md="4">
            <b-row >
              <b-col md="7"><b-img center class="maskot_travee" v-bind:src="travee_f"></b-img></b-col>
              <b-col class="travee_margin" md="5">
                <p class="travee_title"><b>Travee</b></p>
                <p class="travee_des">Travee is a robot who loves adventure and he will guide you to do travel plans easily everywhere you want to go
                  </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4">
            <b-row class="travaa_tengah">
              <b-col md="12"><b-img center style="width:35%" v-bind:src="travaa"></b-img></b-col>
              <b-col md="12">
                <p class="travaa_title"><b>Travaa</b></p>
                <p class="travaa" style="">This wise genius Travaa will give advice to you in preparing for your vacation. You will be guided by Travaa who is wise in making choices.</p>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="4">
            <b-row> 
              <b-col class="travoo_maskot_hide_1" md="7"><b-img class="travoo_maskot" center v-bind:src="travoo2"></b-img></b-col>
              <b-col class="travoo_margin" md="5">
                <p class="travoo_title"><b>Travoo</b></p>
                <p class="travoo">This careless and innocent robot who likes to eat will continue to take you to the best and most recommended places to eat</p>
              </b-col>
              <b-col class="travoo_maskot_hide_2" md="7"><b-img class="travoo_maskot" center v-bind:src="travoo2"></b-img></b-col>
            </b-row>
          </b-col>
        </b-row>
        </b-container>
      </div>
      <b-img style="margin-top:-30px;z-index:-1;positon:absolute;width:100%" v-bind:src="img_6"></b-img>
      <div class="adventure bc_tes_2">
        <b-container class="bv-example-row">
        <b-row>
          <b-col class="title_1_adv" md="12"><p class="adventure_title"><b>The Adventure Begin !!!</b></p><br><p class="adventure_des">Download Our App Now </p></b-col>
        </b-row>
        </b-container>

        <b-container class="bv-example-row">
        <b-row class="margin_adventure_1">
          <b-col class="download_image_1_row" md="3">
            <b-img  center class="download_image_1" v-bind:src="travoo1"></b-img>
            </b-col>
          
          <b-col class="" md="6">
            <div class="download_2">
              <div class="gambar_ps">
              <b-img center style="width:30%;" v-bind:src="play_store"></b-img>

              </div>
              <p style="font-size:25px;margin-top:20px;text-align:center"><b>Play Store</b></p>
            </div>
          </b-col>
          <b-col class="download_image_1_row" md="3">
          <b-img style="positon:absolute" class="download_image_2"  center v-bind:src="travee_s"></b-img>
            </b-col>
            <b-col class="download_image_2_row" md="3">
              <b-img  left class="download_image_1" v-bind:src="travoo1"></b-img>
              </b-col>
        </b-row>
        </b-container>
      </div>

        <footer class="footer_utama">
        <b-row>
          <b-col md="4">
            <div class="footer_1">
              <p style="color:white;text-align:left;"><b>Travling Address</b></p>
              <p style="color:white;text-align:left;">Gang Code 3, Karangjati Wetan, No.170 C, Jl. Monjali No.45, RT.06/RW.RW, Gemangan, Sinduadi, Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283</p>
            </div>
          </b-col>
          <b-col md="4">
            <div class="footer_1">
              <p style="color:white;text-align:left;"><b> Travling Contact</b></p>
              <p style="color:white;text-align:left;">No Telp : (0274) 5014118. Sosial Media : <a style="color:white" href="#">Instagram</a><a style="color:white" href="#">, Facebook</a> dan<a style="color:white" href="#"> Twiiter</a></p>

            </div>
          </b-col>
          <b-col md="4">
            <div class="footer_1">
              <p style="color:white;text-align:left;"><b>Subscribe Us</b></p>
              <b-form-group>
              <b-form-input id="exampleInput1"
                type="email"
                required
                placeholder="Enter email"
                v-model="email">
              </b-form-input>
              </b-form-group>
              <button v-on:click="subscribe ()" class="button_special_2 button_special_hover_2" type="button">
               Subscribe
              </button>
            </div>
          </b-col>
        </b-row>
        </footer>


  </div>
</template>
<script>
import axios from 'axios'
import carousel from 'v-owl-carousel'
export default {
  name: 'hello',
  components: { carousel },
  data () {
    return {
       email :null, 
      bc_image_1:'static/image/background_4.jpg',
      img_1:'static/image/web1.png',
      img_2:'static/image/web2.png',
      img_3:'static/image/web3.png',
      img_4:'static/image/web4.png',
      img_5:'static/image/web5.png',
      img_6:'static/image/web6.png',
      img_7:'static/image/web7.png',
      img_8:'static/image/web8.jpeg',
      img_9:'static/image/web9.png',
      img_10:'static/image/web10.png',
      img_11:'static/image/web11.png',
      img_12:'static/image/web12.png',
      img_13:'static/image/web13.png',
      img_14:'static/image/web14.png',
      img_15:'static/image/web15.png',
      img_16:'static/image/web16.png',
      img_17:'static/image/web17.png',
      img_18:'static/image/web18.png',
      img_19:'static/image/web19.png',
      img_20 :'static/image/web22.jpeg',
      img_22 :'static/image/web22.jpeg',
      img_21 :'static/image/web21.jpeg',
      travaa:'static/image/Travaa.png',
      travee_f:'static/image/Travee_float.png',
      travee_s:'static/image/Travee_scooter.png',
      travoo1:'static/image/Travoo1.png',
      travoo2:'static/image/Travoo2.png',
      awan:'static/image/awan.png',
      bc1:'static/image/bc1.png',
      play_store:'static/image/play_store.png',
      app_store:'static/image/app_store.png',
      team_1:'static/image/team_1.JPG',
      team_2:'static/image/team_2.JPG'
    }
  },
 methods :{
    subscribe (){
      if(this.email==null){
      alert("Anda Harus Menginputkan Email")
      }else{
      alert("Subscribe Berhasil")
      }

    axios({
    method: 'post',
    url: 'https://travling.id:3000/subscribe/',
    data: {"email" : this.email}
    })
    .then(function (response) { 
    console.log(response)
    })
  
    }
  }
}
</script>
