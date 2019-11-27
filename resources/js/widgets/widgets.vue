<template>
    <div>
          <div class="container">
                            <div>
                                <h1>Dashboard <span>Widgets</span></h1>
                            </div>
                            <div class="section-content">
                                <div class="row">
                                    <div class="content-card-body mt-10">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="eco-card-indi mt-20 card-box-shadow border-radius-3">
                                                <div class="eco-card-icon eco-card-icon-primary">
                                                    <p>Wallet Balance</p>
                                                    <div class="card-default-icon">
                                                        <span><i class="fas fa-envelope"></i></span>
                                                    </div>
                                                </div>
                                                <div class="eco-card-price">
                                                    <p>$3,12,154</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="eco-card-indi mt-20 card-box-shadow border-radius-3">
                                                <div class="eco-card-icon eco-card-icon-info">
                                                    <p>Saved Balance</p>
                                                    <div class="card-default-icon">
                                                        <span><i class="fas fa-chart-pie"></i></span>
                                                    </div>
                                                </div>
                                                <div class="eco-card-price">
                                                    <p>$2,10,954</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="eco-card-indi mt-20 card-box-shadow border-radius-3">
                                                <div class="eco-card-icon eco-card-icon-purple">
                                                    <p>Shared Balance</p>
                                                    <div class="card-default-icon">
                                                        <span><i class="fas fa-suitcase"></i></span>
                                                    </div>
                                                </div>
                                                <div class="eco-card-price">
                                                    <p>$1,50,245</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="eco-card-indi mt-20 card-box-shadow border-radius-3">
                                                <div class="eco-card-icon eco-card-icon-success">
                                                    <p>Purchased Balance</p>
                                                    <div class="card-default-icon">
                                                        <span><i class="fas fa-shopping-cart"></i></span>
                                                    </div>
                                                </div>
                                                <div class="eco-card-price">
                                                    <p>$5,70,547</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="line-chart-container mt-10">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">
                                            <div class="small-line-chart card-box-shadow mt-20 border-radius-3">
                                                <div class="eco-chart-icon">
                                                    <div class="card-default-icon card-default-icon-primary">
                                                        <span><i class="fas fa-globe-europe"></i></span>
                                                    </div>
                                                    <div class="card-default-des mt-10">
                                                        <p>687,123</p>
                                                        <span>Monthly visits</span>
                                                    </div>
                                                </div>
                                                <canvas id="widsmallChart1"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <div class="small-line-chart card-box-shadow mt-20 border-radius-3">
                                                <div class="eco-chart-icon">
                                                    <div class="card-default-icon card-default-icon-info">
                                                        <span><i class="fas fa-users"></i></span>
                                                    </div>
                                                    <div class="card-default-des mt-10">
                                                        <p>345,425</p>
                                                        <span>Total Sales</span>
                                                    </div>
                                                </div>
                                                <canvas id="widsmallChart2"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <div class="small-line-chart card-box-shadow mt-20 border-radius-3">
                                                <div class="eco-chart-icon">
                                                    <div class="card-default-icon card-default-icon-warning">
                                                        <span><i class="fas fa-shopping-cart"></i></span>
                                                    </div>
                                                    <div class="card-default-des mt-10">
                                                        <p>542,121</p>
                                                        <span>Total shopping</span>
                                                    </div>
                                                </div>
                                                <canvas id="widsmallChart3"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-card-body mt-10">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="mt-20 card-box-shadow ana-card-indi text-center border-radius-3">
                                                <div class="card-default-icon card-default-icon-primary">
                                                    <span><i class="fab fa-opencart"></i></span>
                                                </div>
                                                <p class="mt-30">Sales</p>
                                                <p>540</p>
                                                <p><span class="grow-up"><i class="fas fa-caret-up"></i></span>&nbsp;&nbsp; 42,53%</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="mt-20 card-box-shadow ana-card-indi text-center border-radius-3">
                                                <div class="card-default-icon card-default-icon-info">
                                                    <span><i class="fas fa-dollar-sign"></i></span>
                                                </div>
                                                <p class="mt-30"> Revenue</p>
                                                <p>$56,754</p>
                                                <p><span class="grow-up"><i class="fas fa-caret-up"></i></span>&nbsp;&nbsp; 32,56%</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="mt-20 card-box-shadow ana-card-indi text-center border-radius-3">
                                                <div class="card-default-icon card-default-icon-warning">
                                                    <span><i class="fas fa-exchange-alt"></i></span>
                                                </div>
                                                <p class="mt-30">Conversion</p>
                                                <p>21%</p>
                                                <p><span class="grow-down"><i class="fas fa-caret-down"></i></span>&nbsp;&nbsp; 12,38%</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="mt-20 card-box-shadow ana-card-indi text-center border-radius-3">
                                                <div class="card-default-icon card-default-icon-success">
                                                    <span><i class="fas fa-database"></i></span>
                                                </div>
                                                <p class="mt-30">Leads</p>
                                                <p>1014</p>
                                                <p><span class="grow-up"><i class="fas fa-caret-up"></i></span>&nbsp;&nbsp; 15,40%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-10">
                                    <div class="col-md-7 col-sm-6 col-xs-12">
                                        <div class="customer-review mt-20 pt-30 border-radius-3 card-box-shadow">
                                            <div class="chart-title pl-30">
                                                <h3>Customer Review</h3>
                                                <span><i class="fas fa-ellipsis-v"></i></span>
                                            </div>
                                            <div class="review-content">
                                                <div class="review-item pl-20 pr-20 pt-30 pb-30">
                                                    <div class="item-figure">
                                                        <figure>
                                                            <img src="assets/images/user-img.png" alt="">
                                                        </figure>
                                                    </div>
                                                    <div class="item-content pl-20">
                                                        <h3>HM Sadek</h3>
                                                        <ul class="review-star">
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                        </ul>
                                                        <p>adminto's design quality is very good.But i hope feedback is more faster than now T.T
                                                                
                                                                thanks.</p>
                                                        <ul class="like-dislike">
                                                            <li><span class="green"><i class="far fa-thumbs-up"></i></span></li>
                                                            <li><span class="dark-red"><i class="far fa-thumbs-down"></i></span></li>
                                                        </ul>
                                                        <h4>a week ago</h4>
                                                    </div>
                                                </div>
                                                <div class="review-item pl-30 pr-30 pt-30 pb-30">
                                                    <div class="item-figure">
                                                        <figure>
                                                            <img src="assets/images/pic2.png" alt="">
                                                        </figure>
                                                    </div>
                                                    <div class="item-content pl-20">
                                                        <h3>Carl Handson</h3>
                                                        <ul class="review-star">
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                            <li><span><i class="far fa-star"></i></span></li>
                                                        </ul>
                                                        <p>We used this theme to save some design time but... wow it has everything you didn't realize you would need later. I highly recommend this template to get your web design headed in the right direction quickly.</p>
                                                        <ul class="like-dislike">
                                                            <li><span class="green"><i class="far fa-thumbs-up"></i></span></li>
                                                            <li><span class="dark-red"><i class="far fa-thumbs-down"></i></span></li>
                                                        </ul>
                                                        <h4>2 week ago</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-all text-center pt-20 pb-20">
                                                <p><a href="">View all reviews</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-sm-6">
                                        <div class="progress-item mt-20 pt-30 pb-60 border-radius-3 card-box-shadow">
                                            <div class="chart-title mb-30 pl-30">
                                                <h3>Profile Status</h3>
                                                <span><i class="fas fa-ellipsis-v"></i></span>
                                            </div>
                                            <div class="progress-data mt-10 pl-20 pr-20">
                                                <p>Web Development</p>
                                                <span>12/18</span>
                                                <div class="progress-full">
                                                    <div class="progress-inner progress-inner-1"></div>
                                                </div>
                                            </div>
                                            <div class="progress-data mt-10 pl-20 pr-20">
                                                <p>UI/ UX Design</p>
                                                <span>15/18</span>
                                                <div class="progress-full">
                                                    <div class="progress-inner progress-inner-2"></div>
                                                </div>
                                            </div>
                                            <div class="progress-data mt-10 pl-20 pr-20">
                                                <p>Android</p>
                                                <span>11/19</span>
                                                <div class="progress-full">
                                                    <div class="progress-inner progress-inner-3"></div>
                                                </div>
                                            </div>
                                            <div class="progress-data mt-10 pl-20 pr-20">
                                                <p>IOS</p>
                                                <span>10/18</span>
                                                <div class="progress-full">
                                                    <div class="progress-inner progress-inner-4"></div>
                                                </div>
                                            </div>
                                            <div class="progress-data mt-10 pl-20 pr-20">
                                                <p>Digital Marketing</p>
                                                <span>25/28</span>
                                                <div class="progress-full">
                                                    <div class="progress-inner progress-inner-5"></div>
                                                </div>
                                            </div>
                                            <div class="progress-data mt-10 pl-20 pr-20">
                                                <p>Sass</p>
                                                <span>15/17</span>
                                                <div class="progress-full">
                                                    <div class="progress-inner progress-inner-6"></div>
                                                </div>
                                            </div>
                                            <div class="progress-data mt-10 pl-20 pr-20">
                                                <p>Ruby</p>
                                                <span>15/17</span>
                                                <div class="progress-full">
                                                    <div class="progress-inner progress-inner-7"></div>
                                                </div>
                                            </div>
                                            <div class="progress-data mt-10 pl-20 pr-20">
                                                <p>Java</p>
                                                <span>15/17</span>
                                                <div class="progress-full">
                                                    <div class="progress-inner progress-inner-5"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-card-body mt-10">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="default-card-indi mt-20 text-center border-radius-3 card-box-shadow">
                                                <div class="card-default-icon card-default-icon-primary">
                                                    <span><i class="fab fa-facebook-f"></i></span>
                                                </div>
                                                <div class="card-default-des">
                                                    <p>Facebook</p>
                                                    <span><a href="">Follow me<span><i class="fas fa-arrow-right"></i></span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="default-card-indi mt-20 text-center border-radius-3 card-box-shadow">
                                                <div class="card-default-icon card-default-icon-info">
                                                    <span><i class="fab fa-twitter"></i></span>
                                                </div>
                                                <div class="card-default-des">
                                                    <p>Twitter</p>
                                                    <span><a href="">Follow me<span><i class="fas fa-arrow-right"></i></span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="default-card-indi mt-20 text-center border-radius-3 card-box-shadow">
                                                <div class="card-default-icon card-default-icon-warning">
                                                    <span><i class="fab fa-instagram"></i></span>
                                                </div>
                                                <div class="card-default-des">
                                                    <p>Instagram</p>
                                                    <span><a href="">Follow me<span><i class="fas fa-arrow-right"></i></span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="default-card-indi mt-20 text-center border-radius-3 card-box-shadow">
                                                <div class="card-default-icon card-default-icon-success">
                                                    <span><i class="fab fa-linkedin-in"></i></span>
                                                </div>
                                                <div class="card-default-des">
                                                    <p>LinkedIn</p>
                                                    <span><a href="">Follow me<span><i class="fas fa-arrow-right"></i></span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="recent-activity-section mt-10">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="recent-activity mt-20 pt-30 pb-30 card-box-shadow border-radius-3">
                                                <div class="chart-title mb-30 pl-30">
                                                    <h3>Recent Activity</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <div class="pl-30 pr-30">
                                                    <div class="activity-details after-red pt-20 pb-20 pl-20 pr-20">
                                                        <div class="activity-indi">
                                                            <div class="activity-inner">
                                                                <p><span><i class="far fa-dot-circle"></i></span>&nbsp;&nbsp;<span>5 mins ago</span></p>
                                                                <p>Any desktop publishing packages and web page editors.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="activity-details after-green pt-20 pb-20 pl-20 pr-20">
                                                        <div class="activity-indi">
                                                            <div class="activity-inner">
                                                                <p><span><i class="far fa-dot-circle"></i></span>&nbsp;&nbsp;<span>15 mins ago</span></p>
                                                                <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="activity-details after-dark-red pt-20 pb-20 pl-20 pr-20">
                                                        <div class="activity-indi">
                                                            <div class="activity-inner">
                                                                <p><span><i class="far fa-dot-circle"></i></span>&nbsp;&nbsp;<span>43 mins ago</span></p>
                                                                <p>Established fact that a reader will be distracted</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="activity-details after-yellow pt-20 pb-20 pl-20 pr-20">
                                                        <div class="activity-indi">
                                                            <div class="activity-inner">
                                                                <p><span><i class="far fa-dot-circle"></i></span>&nbsp;&nbsp;<span>1 hour 2 mins ago</span></p>
                                                                <p>H-Code - A premium portfolio template from ThemeZaa.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="counter-section card-box-shadow mt-20 pt-30 pb-30 border-radius-3">
                                                <div class="chart-title mb-30 pl-30">
                                                    <h3>Recent Staffs</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <div class="counter-details">
                                                    <div class="counter-inner">
                                                        <div class="counter-icon counter-icon-primary">
                                                            <span><i class="fas fa-users"></i></span>
                                                        </div>
                                                        <div class="counter-content mt-20">
                                                            <p>$&nbsp;<span class="counter">2,324</span></p>
                                                            <span>Total User</span>
                                                        </div>
                                                    </div>
                                                    <div class="counter-inner">
                                                        <div class="counter-icon counter-icon-info">
                                                            <span><i class="fas fa-dollar-sign"></i></span>
                                                        </div>
                                                        <div class="counter-content mt-20">
                                                            <p>$&nbsp;<span class="counter">1,545</span></p>
                                                            <span>Income Ammount</span>
                                                        </div>
                                                    </div>
                                                    <div class="counter-inner">
                                                        <div class="counter-icon counter-icon-purple">
                                                            <span><i class="fas fa-cart-plus"></i></span>
                                                        </div>
                                                        <div class="counter-content mt-20">
                                                            <p>$&nbsp;<span class="counter">3,258</span></p>
                                                            <span>Lifetime Sales</span>
                                                        </div>
                                                    </div>
                                                    <div class="counter-inner">
                                                        <div class="counter-icon counter-icon-purple">
                                                            <span><i class="far fa-eye"></i></span>
                                                        </div>
                                                        <div class="counter-content mt-20">
                                                            <p>$&nbsp;<span class="counter">2,548</span></p>
                                                            <span>Total Visits</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="counter-section card-box-shadow mt-30 pt-30 pb-30 border-radius-3">
                                                <div class="chart-title mb-30 pl-30">
                                                    <h3>Recent Sales</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <div class="counter-details">
                                                    <div class="counter-inner">
                                                        <div class="counter-icon counter-icon-full-primary">
                                                            <span><i class="far fa-user"></i></span>
                                                        </div>
                                                        <div class="counter-content mt-20">
                                                            <p>$&nbsp;<span class="counter">2,324</span></p>
                                                        </div>
                                                    </div>
                                                    <div class="counter-inner">
                                                        <div class="counter-icon counter-icon-full-info">
                                                            <span><i class="fas fa-users"></i></span>
                                                        </div>
                                                        <div class="counter-content mt-20">
                                                            <p>$&nbsp;<span class="counter">1,545</span></p>
                                                        </div>
                                                    </div>
                                                    <div class="counter-inner">
                                                        <div class="counter-icon counter-icon-full-purple">
                                                            <span><i class="fas fa-briefcase"></i></span>
                                                        </div>
                                                        <div class="counter-content mt-20">
                                                            <p>$&nbsp;<span class="counter">3,548</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="small-card-container mt-10">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <h3 class="mb-10">Income Status</h3>
                                                <p class="red mb-10">6,382</p>
                                                <p><span class="dark-red"><i class="fas fa-chevron-down"></i>&nbsp;
                                                    &nbsp;</span>15% decrease</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <h3 class="mb-10">Sales Status</h3>
                                                <p class="green mb-10">4,792</p>
                                                <p><span class="green"><i class="fas fa-chevron-up"></i>&nbsp;
                                                    &nbsp;</span>30% increase</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <h3 class="mb-10">Recent Users</h3>
                                                <p class="dark-red mb-10">5,456</p>
                                                <p><span class="dark-red"><i class="fas fa-chevron-down"></i>&nbsp;
                                                    &nbsp;</span>20% decrease</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <h3 class="mb-10">Total Revenue</h3>
                                                <p class="green mb-10">4,792</p>
                                                <p><span class="green"><i class="fas fa-chevron-up"></i>&nbsp;
                                                    &nbsp;</span>37% increase</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="small-card-container mt-10">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 text-center para-color bg-violet card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <p class="mb-10">2,548</p>
                                                <h3 class="mb-10">Daily Visits</h3>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 text-center para-color bg-blue card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <p class="mb-10">5,478</p>
                                                <h3 class="mb-10">Weekly Visits</h3>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 text-center para-color bg-purple card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <p class=" mb-10">521</p>
                                                <h3 class="mb-10">Monthly Visits</h3>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 text-center para-color bg-green card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <p class="mb-10">6,485</p>
                                                <h3 class="mb-10">Yearly Visits</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="small-card-container mt-10">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <h3>Total Tickets</h3>
                                                <div class="card-progress-bar card-progress-bar-primary mt-30">
                                                    <p>Basic</p>
                                                    <span>80%</span>
                                                    <div class="card-bar-full">
                                                        <div class="card-bar-inner card-bar-inner-1"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <h3>Pending Tickets</h3>
                                                <div class="card-progress-bar card-progress-bar-info mt-30">
                                                    <p>Basic</p>
                                                    <span>90%</span>
                                                    <div class="card-bar-full">
                                                        <div class="card-bar-inner card-bar-inner-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <h3>Closed Tickets</h3>
                                                <div class="card-progress-bar card-progress-bar-warning mt-30">
                                                    <p>Basic</p>
                                                    <span>60%</span>
                                                    <div class="card-bar-full">
                                                        <div class="card-bar-inner card-bar-inner-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <div class="small-card-details border-radius-3 card-box-shadow pt-20 pb-20 pr-20 pl-20 mt-20">
                                                <h3>Deleted Tickets</h3>
                                                <div class="card-progress-bar card-progress-bar-purple mt-30">
                                                    <p>Basic</p>
                                                    <span>40%</span>
                                                    <div class="card-bar-full">
                                                        <div class="card-bar-inner card-bar-inner-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table mt-30">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="bg-table card-box-shadow pt-30">
                                                <div class="wd-table-title chart-title pl-30 pr-30">
                                                    <h3>Recent Orders</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <div class="over">
                                                    <table class="wid-table mt-30">
                                                        <thead>
                                                            <tr>
                                                                <th>Photo</th>
                                                                <th>Name</th>
                                                                <th>Product</th>
                                                                <th>Quantity</th>
                                                                <th>Review</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        
                                                        <tbody>
                                                            <tr>
                                                                <td class="td-img"><img src="assets/images/user-img.png" alt=""></td>
                                                                <th>HM Sadek</th>
                                                                <td>MacBook</td>
                                                                <td>2</td>
                                                                <td>
                                                                    <ul class="review-star">
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                    </ul>
                                                                </td>
                                                                <td>$1500</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="td-img"><img src="assets/images/pic1.png" alt=""></td>
                                                                <th>John deo</th>
                                                                <td>Iphone 10s max</td>
                                                                <td>1</td>
                                                                <td>
                                                                    <ul class="review-star">
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                    </ul>
                                                                </td>
                                                                <td>$1100</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="td-img"><img src="assets/images/pic2.png" alt=""></td>
                                                                <th>Md. Adnan</th>
                                                                <td>Trimmer</td>
                                                                <td>1</td>
                                                                <td>
                                                                    <ul class="review-star">
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                    </ul>
                                                                </td>
                                                                <td>$200</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="td-img"><img src="assets/images/pic3.png" alt=""></td>
                                                                <th>Md. Hasibur Rahman</th>
                                                                <td>Bits headphone</td>
                                                                <td>1</td>
                                                                <td>
                                                                    <ul class="review-star">
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                    </ul>
                                                                </td>
                                                                <td>$250</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="td-img"><img src="assets/images/pic4.png" alt=""></td>
                                                                <th>Seikh Jabed</th>
                                                                <td>Macbook Air Pro</td>
                                                                <td>1</td>
                                                                <td>
                                                                    <ul class="review-star">
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                        <li><span><i class="far fa-star"></i></span></li>
                                                                    </ul>
                                                                </td>
                                                                <td>$1280</td>
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
</template>