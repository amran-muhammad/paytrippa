<template>
    <div>
        
        <div class="wrapper">
            
            </div>
            <div class="full-item">
                
                <div class="left-item">
                    <div class="content-item pt-30 pl-10 pr-10 pb-50">
                        <div class="container">
                            <div class="title pb-5">
                                <h1>Dashboard <span>Home</span> <span>|</span> <span>Analytics</span></h1>
                            </div>
                            <div class="section-content">
                                <div class="row">
                                    <div class="content-card-body mt-10">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="mt-20 card-box-shadow ana-card-indi text-center border-radius-3">
                                                <div class="card-default-icon card-default-icon-primary">
                                                    <span><i class="fas fa-envelope"></i></span>
                                                </div>
                                                <p class="mt-30"><span>8.62k</span> Subscribers</p>
                                                <p>Total Subscribers</p>
                                                <button class="mt-10">Manage List</button>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="mt-20 card-box-shadow ana-card-indi text-center border-radius-3">
                                                <div class="card-default-icon card-default-icon-info">
                                                    <span><i class="fab fa-twitter"></i></span>
                                                </div>
                                                <p class="mt-30"><span>10+</span> Followers</p>
                                                <p>Total Followers</p>
                                                <button class="mt-10">Check them out</button>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="mt-20 card-box-shadow ana-card-indi text-center border-radius-3">
                                                <div class="card-default-icon card-default-icon-warning">
                                                    <span><i class="fas fa-suitcase"></i></span>
                                                </div>
                                                <p class="mt-30"><span>412.3k+</span> Likes</p>
                                                <p>Total Likes</p>
                                                <button class="mt-10">Check them out</button>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="mt-20 card-box-shadow ana-card-indi text-center border-radius-3">
                                                <div class="card-default-icon card-default-icon-success">
                                                    <span><i class="fas fa-shopping-cart"></i></span>
                                                </div>
                                                <p class="mt-30"><span>25%</span> New orders</p>
                                                <p>New Order Always Comming</p>
                                                <button class="mt-10">Update now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-10">
                                    <div class="col-md-6">
                                        <div class="ana-line-chart mt-20 pt-30 pb-30 border-radius-3 card-box-shadow">
                                            <div class="chart-title pl-30 mb-40">
                                                <h3>Rate of Exchange</h3>
                                                <p>Unique Visitors</p>
                                            </div>
                                            <div class="box">
                                                <select name="bchart-item" id="">
                                                    <option value="week">This Week&nbsp;<i class="fas fa-caret-down"></i></option>
                                                    <option value="week">Last Week&nbsp;<i class="fas fa-caret-down"></i></option>
                                                    <option value="week">This Month&nbsp;<i class="fas fa-caret-down"></i></option>
                                                    <option value="week">Last Month&nbsp;<i class="fas fa-caret-down"></i></option>
                                                </select>
                                            </div>
                                            <canvas id="aChart" class="pl-30 pr-30"></canvas>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="ana-line-chart mt-20 pt-30 pb-30 border-radius-3 card-box-shadow">
                                            <div class="chart-title pl-30 mb-40">
                                                <h3>Rate of Viewers</h3>
                                                <p>Unique Visitors</p>
                                            </div>
                                            <div class="box">
                                                <select name="bchart-item" id="">
                                                    <option value="week">This Week&nbsp;<i class="fas fa-caret-down"></i></option>
                                                    <option value="week">Last Week&nbsp;<i class="fas fa-caret-down"></i></option>
                                                    <option value="week">This Month&nbsp;<i class="fas fa-caret-down"></i></option>
                                                    <option value="week">Last Month&nbsp;<i class="fas fa-caret-down"></i></option>
                                                </select>
                                            </div>
                                            <canvas id="bChart" class="pl-30 pr-30"></canvas>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-history mt-10">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="doughnut-chart mt-20 pt-30 pb-30 border-radius-3 card-box-shadow">
                                                <div class="chart-title pl-30 mb-30">
                                                    <h3>Product Categories</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <canvas id="doughnutChart" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="radar-chart mt-20 pt-30 pb-30 border-radius-3 card-box-shadow">
                                                <div class="chart-title pl-30 mb-30">
                                                    <h3>Product Categories</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <canvas id="radar-chart" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="small-chart-container mt-10">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="small-chart card-box-shadow border-radius-3 pl-15 pr-15 pb-30 pt-30 mt-20">
                                                <div class="small-chart-title">
                                                    <p>Total Orders in Per Day</p>
                                                    <small>Total Expense</small>
                                                </div>
                                                <canvas id="smallChart1"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="small-chart card-box-shadow border-radius-3 pl-15 pr-15 pb-30 pt-30 mt-20">
                                                <div class="small-chart-title">
                                                    <p>Total Orders in Per Week</p>
                                                    <small>Total Expense</small>
                                                </div>
                                                <canvas id="smallChart2"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="small-chart card-box-shadow border-radius-3 pl-15 pr-15 pb-30 pt-30 mt-20">
                                                <div class="small-chart-title">
                                                    <p>Total Orders in Per Month</p>
                                                    <small>Total Expense</small>
                                                </div>
                                                <canvas id="smallChart3"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-3  col-sm-6">
                                            <div class="small-chart card-box-shadow border-radius-3 pl-15 pr-15 pb-30 pt-30 mt-20">
                                                <div class="small-chart-title">
                                                    <p>Total Orders in Per Year</p>
                                                    <small>Total Expense</small>
                                                </div>
                                                <canvas id="smallChart4"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="circle-container mt-10">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">
                                            <div class="circle card-box-shadow border-radius-3 mt-20 pt-30 pb-30">
                                                <div class="circle-progress-bar">
                                                    <div class="progress-circle over50 p75">
                                                        <span>75%</span>
                                                        <div class="left-half-clipper">
                                                            <div class="first50-bar bar-primary"></div>
                                                            <div class="value-bar value-bar-primary"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="circle-title">
                                                    <p>Consulations</p>
                                                    <span class="circle-box circle-box-primary">-15%</span>
                                                    <p class="bar-total">75% <span>Today</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <div class="circle card-box-shadow border-radius-3 mt-20 pt-30 pb-30">
                                                <div class="circle-progress-bar">
                                                    <div class="progress-circle over50 p50">
                                                        <span>50%</span>
                                                        <div class="left-half-clipper">
                                                            <div class="first50-bar bar-info"></div>
                                                            <div class="value-bar value-bar-info"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="circle-title">
                                                    <p>Shopping</p>
                                                    <span class="circle-box circle-box-info">-25%</span>
                                                    <p class="bar-total">50% <span>Today</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <div class="circle card-box-shadow border-radius-3 mt-20 pt-30 pb-30">
                                                <div class="circle-progress-bar">
                                                    <div class="progress-circle over50 p90">
                                                        <span>90%</span>
                                                        <div class="left-half-clipper">
                                                            <div class="first50-bar bar-success"></div>
                                                            <div class="value-bar value-bar-success"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="circle-title">
                                                    <p>Payment</p>
                                                    <span class="circle-box circle-box-success">-10%</span>
                                                    <p class="bar-total">90% <span>Today</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ana-bar-container mt-10">
                                    <div class="ana-bar-chart mt-20 pt-30 pb-30 border-radius-3 card-box-shadow">
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
                                        <canvas id="ana-barChart" class="pl-30 pr-30"></canvas>
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
            
        </div>
       
    </div>
</template>