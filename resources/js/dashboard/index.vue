<template>
    <div>
          <div class="left-item">
                    <div class="content-item pt-30 pl-10 pr-10 pb-50">
                        <div class="container">
                            <div class="title pb-5">
                                <h1>Dashboard <span>Home</span> <span>|</span> <span>Default</span></h1>
                            </div>
                            <div class="section-content">
                                <div class="content-card-body mt-10">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="default-card-indi mt-20 text-center border-radius-3 card-box-shadow">
                                                <div class="card-default-icon card-default-icon-primary">
                                                    <span><i class="fas fa-envelope"></i></span>
                                                </div>
                                                <div class="card-default-des">
                                                    <p>512</p>
                                                    <span><a href="">Pending mail<span><i class="fas fa-arrow-right"></i></span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="default-card-indi mt-20 text-center border-radius-3 card-box-shadow">
                                                <div class="card-default-icon card-default-icon-info">
                                                    <span><i class="fas fa-user"></i></span>
                                                </div>
                                                <div class="card-default-des">
                                                    <p>314</p>
                                                    <span><a href="">Pending request<span><i class="fas fa-arrow-right"></i></span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="default-card-indi mt-20 text-center border-radius-3 card-box-shadow">
                                                <div class="card-default-icon card-default-icon-warning">
                                                    <span><i class="fas fa-phone"></i></span>
                                                </div>
                                                <div class="card-default-des">
                                                    <p>215</p>
                                                    <span><a href="">Pending support<span><i class="fas fa-arrow-right"></i></span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="default-card-indi mt-20 text-center border-radius-3 card-box-shadow">
                                                <div class="card-default-icon card-default-icon-success">
                                                    <span><i class="fas fa-dollar-sign"></i></span>
                                                </div>
                                                <div class="card-default-des">
                                                    <p>112</p>
                                                    <span><a href="">Pending payment<span><i class="fas fa-arrow-right"></i></span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="line-chart mt-30 pt-30 pb-30 border-radius-3 card-box-shadow">
                                            <div class="chart-title pl-30 mb-40">
                                                <h3>Rate of Purchase</h3>
                                                <p>Unique Visitors</p>
                                            </div>
                                            <div class="box">
                                                <select name="bchart-item" id="">
                                                    <option value="week">January&nbsp;</option>
                                                    <option value="week">February&nbsp;</option>
                                                    <option value="week">March&nbsp;</option>
                                                    <option value="week">April&nbsp;</option>
                                                    <option value="week">May&nbsp;</option>
                                                    <option value="week">June&nbsp;</option>
                                                    <option value="week">July&nbsp;</option>
                                                    <option value="week">Auguest&nbsp;</option>
                                                    <option value="week">September&nbsp;</option>
                                                    <option value="week">Octobor&nbsp;</option>
                                                    <option value="week">November&nbsp;</option>
                                                    <option value="week">December&nbsp;</option>
                                                </select>
                                            </div>
                                            <canvas id="myChart" class="pl-30 pr-30"></canvas>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="line-chart mt-30 pt-30 pb-30 border-radius-3 card-box-shadow">
                                            <div class="chart-title pl-30 mb-40">
                                                <h3>Rate of Exchange</h3>
                                                <p>Unique Visitors</p>
                                            </div>
                                            <div class="box">
                                                <select name="bchart-item" id="">
                                                    <option value="week">January&nbsp;</option>
                                                    <option value="week">February&nbsp;</option>
                                                    <option value="week">March&nbsp;</option>
                                                    <option value="week">April&nbsp;</option>
                                                    <option value="week">May&nbsp;</option>
                                                    <option value="week">June&nbsp;</option>
                                                    <option value="week">July&nbsp;</option>
                                                    <option value="week">Auguest&nbsp;</option>
                                                    <option value="week">September&nbsp;</option>
                                                    <option value="week">Octobor&nbsp;</option>
                                                    <option value="week">November&nbsp;</option>
                                                    <option value="week">December&nbsp;</option>
                                                </select>
                                            </div>
                                            <canvas id="index-bar-chart" class="pl-30 pr-30"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div class="media-slider mt-30">
                                    <div class="indi-sec-title">
                                        <h2>Most Recent Client</h2>
                                    </div>
                                    <div class="owl-carousel owl-theme mt-20">
                                        <div class="item border-radius-3 card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/user-img.png" alt="">
                                                </figure>
                                                <span>44 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider1.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>1,204</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>504</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>12.2%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item border-radius-3 card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/pic3.png" alt="">
                                                </figure>
                                                <span>50 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider2.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>1,004</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>404</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>15.2%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item border-radius-3 card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/pic1.png" alt="">
                                                </figure>
                                                <span>56 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider3.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>1,404</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>304</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>11.2%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item border-radius-3 card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/pic2.png" alt="">
                                                </figure>
                                                <span>69 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider4.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>1,344</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>564</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>13.1%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item border-radius-3  card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/pic4.png" alt="">
                                                </figure>
                                                <span>73 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider5.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>2,224</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>474</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>17.2%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item border-radius-3 card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/pic5.png" alt="">
                                                </figure>
                                                <span>80 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider1.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>1,794</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>657</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>12.9%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item border-radius-3 card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/pic6.png" alt="">
                                                </figure>
                                                <span>86 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider2.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>1,604</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>764</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>19.2%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item border-radius-3 card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/Untitled-1.jpg" alt="">
                                                </figure>
                                                <span>73 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider3.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>1,204</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>504</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>12.2%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item border-radius-3 card-box-shadow">
                                            <div class="item-title">
                                                <figure>
                                                    <img src="assets/images/pic4.png" alt="">
                                                </figure>
                                                <span>93 days ago</span>
                                            </div>
                                            <div class="item-figure">
                                                <figure>
                                                    <img src="assets/images/slider4.jpg" alt="dashboard slider image">
                                                </figure>
                                            </div>
                                            <div class="item-review">
                                                <ul>
                                                    <li><i class="fas fa-heart"></i>&nbsp;<span>1,804</span></li>
                                                    <li><i class="fas fa-comment"></i>&nbsp;<span>874</span></li>
                                                    <li><i class="fas fa-clock"></i>&nbsp;<span>12.9%</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-history">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="pie-chart mt-30 pt-30 pb-30 border-radius-3 card-box-shadow">
                                                <div class="chart-title pl-30">
                                                    <h3>Product Categories</h3>
                                                </div>
                                                <div class="box">
                                                    <select name="bchart-item" id="">
                                                        <option value="week">January&nbsp;</option>
                                                        <option value="week">February&nbsp;</option>
                                                        <option value="week">March&nbsp;</option>
                                                        <option value="week">April&nbsp;</option>
                                                        <option value="week">May&nbsp;</option>
                                                        <option value="week">June&nbsp;</option>
                                                        <option value="week">July&nbsp;</option>
                                                        <option value="week">Auguest&nbsp;</option>
                                                        <option value="week">September&nbsp;</option>
                                                        <option value="week">Octobor&nbsp;</option>
                                                        <option value="week">November&nbsp;</option>
                                                        <option value="week">December&nbsp;</option>
                                                    </select>
                                                </div>
                                                <canvas id="polar-chart" width="600" height="400"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="bar-chart mt-30 pt-30 pb-30 border-radius-3 card-box-shadow">
                                                <div class="chart-title pl-30">
                                                    <h3>Product View</h3>
                                                </div>
                                                <div class="box">
                                                    <select name="bchart-item" id="">
                                                        <option value="week">January&nbsp;</option>
                                                        <option value="week">February&nbsp;</option>
                                                        <option value="week">March&nbsp;</option>
                                                        <option value="week">April&nbsp;</option>
                                                        <option value="week">May&nbsp;</option>
                                                        <option value="week">June&nbsp;</option>
                                                        <option value="week">July&nbsp;</option>
                                                        <option value="week">Auguest&nbsp;</option>
                                                        <option value="week">September&nbsp;</option>
                                                        <option value="week">Octobor&nbsp;</option>
                                                        <option value="week">November&nbsp;</option>
                                                        <option value="week">December&nbsp;</option>
                                                    </select>
                                                </div>
                                                <canvas id="bar-chart" width="600" height="380" class="pr-30 pl-30 mt-20"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table mt-10">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="bg-table pt-30 card-box-shadow border-radius-3 mt-20">
                                                <div class="chart-title pl-30 pr-30">
                                                    <h3>Page Visits</h3>
                                                    <button class="self-btn self-btn-info">See all</button>
                                                </div>
                                                <div class="over">
                                                    <table class="mt-30">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Page Name</th>
                                                                <th>Visitors</th>
                                                                <th>Unique Users</th>
                                                                <th>Bounce Rate</th>
                                                            </tr>
                                                        </thead>
                                                        
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>/dashboard/</td>
                                                                <td>1,150</td>
                                                                <td>152</td>
                                                                <td><span class="grow-up"><i class="fas fa-arrow-up"></i></span>&nbsp;&nbsp; 46,83%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>/dashboard/index.html/</td>
                                                                <td>1,348</td>
                                                                <td>250</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 48,72%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>/dashboard/inbox-mail.html</td>
                                                                <td>1,250</td>
                                                                <td>400</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 42,67%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>/dashboard/pagination.html</td>
                                                                <td>1,060</td>
                                                                <td>320</td>
                                                                <td><span class="grow-up"><i class="fas fa-arrow-up"></i></span>&nbsp;&nbsp; 51,51%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>/dashboard/payment.html</td>
                                                                <td>1,735</td>
                                                                <td>340</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 43,03%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="bg-table pt-30 card-box-shadow border-radius-3 mt-20">
                                                <div class="chart-title pl-30 pr-30">
                                                    <h3>Page Visits</h3>
                                                    <button class="self-btn self-btn-info">See all</button>
                                                </div>
                                                <div class="over">
                                                    <table class="mt-30">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Page Name</th>
                                                                <th>Visitors</th>
                                                                <th>Unique Users</th>
                                                                <th>Bounce Rate</th>
                                                            </tr>
                                                        </thead>
                                                        
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <th>/dashboard/form.html</th>
                                                                <td>1,056</td>
                                                                <td>152</td>
                                                                <td><span class="grow-up"><i class="fas fa-arrow-up"></i></span>&nbsp;&nbsp; 41,53%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <th>/dashboard/inbox.html/</th>
                                                                <td>1,475</td>
                                                                <td>250</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 45,59%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <th>/dashboard/product.html</th>
                                                                <td>1,312</td>
                                                                <td>400</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 46,52%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <th>/dashboard/product-list.html</th>
                                                                <td>1,780</td>
                                                                <td>320</td>
                                                                <td><span class="grow-up"><i class="fas fa-arrow-up"></i></span>&nbsp;&nbsp; 51,59%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <th>/dashboard/timeline.html</th>
                                                                <td>1,165</td>
                                                                <td>340</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 45,56%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="footer-content pr-30 pt-10">
                        <div class="align">
                            <p>Copyright @Sadek 2019, All rights reserved.</p>
                        </div>
                    </div>
                </div>
           
    </div>
</template>