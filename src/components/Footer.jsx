import React from 'react'
import wa from '../images/whatsapp.png'
import shopee from '../images/shopee-seeklogo.com.svg'
import tokped from '../images/tokopedia-seeklogo.com.svg'
import ig from '../images/icons8-instagram.svg'
import mail from '../images/icons8-secured-letter-64.png'

export const Footer = () => {
    return (
        <div>
            <section class="container mt-5 mb-3" id="contact">
                <p class="text-center">
                    <a href="#"><img class="grow" src={shopee} width="50px" alt="Shopee" /></a>&nbsp;&nbsp;&nbsp;<a href="#" ><img src={tokped} width="50px" class="grow" alt="Tokopedia" /></a>&nbsp;&nbsp;&nbsp;<a href="#"><img class="grow" src={ig} width="55px" alt="Instagram" /></a>&nbsp;&nbsp;&nbsp;<a href="mailto:info@barari-indonesia.com"><img src={mail} width="52px" class="grow" alt="Mail" /></a></p>
            </section>
            <footer>
                <div>
                    <a href="https://wa.me/6281283480083"><img class="logo-wa grow" src={wa} width="60px" alt="Whatsapp" /></a>
                </div>
                <div class="container pt-5 border-bottom">
                    <div class="row">
                        <div class="col-md-7 col-sm-12 mb-3 text-left">
                            <h5 class="mb-4 font-weight-bold text-uppercase">About</h5>
                            <p class="mr-5 light-text">
                                Barari Indonesia is an official importer of Barari product that has been established since 2013. Our vision is to become a trusted and reliable premium date fruits based company. We have a mission to raise Indonesian society's awareness to the highly nutritioned and countless benefits of date fruits, and also the snacks it can produced.
                </p> </div>
                        <div class="col-md-5 col-sm-12">

                            <div class="col-md-6 col-sm-6 col-6 p-0 mb-3 float-left">
                                <h5 class="mb-4 font-weight-bold text-uppercase">shop</h5>
                                <ul class="list-group light-text">
                                    <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#">Shopee</a></li>
                                    <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#">Tokopedia</a></li>
                                </ul>
                            </div>

                            <div class="col-md-6 col-sm-6 col-6 mb-3 p-0 float-left">
                                <h5 class="mb-4 font-weight-bold text-uppercase">PAGE</h5>
                                <ul class="list-group light-text">
                                    <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                                        <a href="./products.html">PRODUCTS</a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div class="col-md-12">
                            <div class="py-4 d-flex justify-content-center align-items-center">
                                <p class="light-text text-center">2020 &copy; PT. BARARI INDONESIA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
