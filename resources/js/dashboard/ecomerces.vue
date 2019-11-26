<template>
    <div>
         <div class="left-item">
                    <div class="content-item pt-30 pl-10 pr-10 pb-50">
                        <div class="container">
                            <div class="title pb-5">
                                <h1>Dashboard <span>Home</span> <span>|</span> <span>Ecommerce</span></h1>
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
                                <div class="small-chart-container mt-10">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="small-chart border-radius-3 card-box-shadow pl-15 pr-15 pb-30 pt-30 mt-20">
                                                <div class="small-chart-title">
                                                    <p>Total Orders in Per Day</p>
                                                    <small>Total Expense</small>
                                                </div>
                                                <canvas id="ecosmallChart1"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="small-chart border-radius-3 card-box-shadow pl-15 pr-15 pb-30 pt-30 mt-20">
                                                <div class="small-chart-title">
                                                    <p>Total Orders in Per Week</p>
                                                    <small>Total Expense</small>
                                                </div>
                                                <canvas id="ecosmallChart2"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="small-chart border-radius-3 card-box-shadow pl-15 pr-15 pb-30 pt-30 mt-20">
                                                <div class="small-chart-title">
                                                    <p>Total Orders in Per Month</p>
                                                    <small>Total Expense</small>
                                                </div>
                                                <canvas id="ecosmallChart3"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="small-chart border-radius-3 card-box-shadow pl-15 pr-15 pb-30 pt-30 mt-20">
                                                <div class="small-chart-title">
                                                    <p>Total Orders in Per Year</p>
                                                    <small>Total Expense</small>
                                                </div>
                                                <canvas id="ecosmallChart4"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eco-bar-container mt-10">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">
                                            <div class="eco-bar-chart card-box-shadow mt-20 border-radius-3">
                                                <div class="eco-chart-icon">
                                                    <div class="card-default-icon card-default-icon-primary">
                                                        <span><i class="fas fa-globe-europe"></i></span>
                                                    </div>
                                                    <div class="card-default-des mt-10">
                                                        <p>687,123</p>
                                                        <span>Monthly visits</span>
                                                    </div>
                                                </div>
                                                <canvas id="ecobarChart1"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <div class="eco-bar-chart card-box-shadow mt-20 border-radius-3">
                                                <div class="eco-chart-icon">
                                                    <div class="card-default-icon card-default-icon-info">
                                                        <span><i class="fas fa-users"></i></span>
                                                    </div>
                                                    <div class="card-default-des mt-10">
                                                        <p>345,425</p>
                                                        <span>Average reach per cost</span>
                                                    </div>
                                                </div>
                                                <canvas id="ecobarChart2"></canvas>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <div class="eco-bar-chart card-box-shadow mt-20 border-radius-3">
                                                <div class="eco-chart-icon">
                                                    <div class="card-default-icon card-default-icon-warning">
                                                        <span><i class="fas fa-shopping-cart"></i></span>
                                                    </div>
                                                    <div class="card-default-des mt-10">
                                                        <p>542,121</p>
                                                        <span>Total shopping</span>
                                                    </div>
                                                </div>
                                                <canvas id="ecobarChart3"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table mt-10">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="bg-table pt-30 mt-20">
                                                <div class="chart-title pl-30 pr-30">
                                                    <h3>Global Sales by Top Locations</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <div class="over">
                                                    <table class="mt-30">
                                                        <thead>
                                                            <tr class="text-center">
                                                                <th>ID</th>
                                                                <th>Country</th>
                                                                <th>Visitors</th>
                                                                <th>Unique Users</th>
                                                                <th>Bounce Rate</th>
                                                            </tr>
                                                        </thead>
                                                        
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Bangladesh</td>
                                                                <td>1,250</td>
                                                                <td>152</td>
                                                                <td><span class="grow-up"><i class="fas fa-arrow-up"></i></span>&nbsp;&nbsp; 42,53%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Germany</td>
                                                                <td>1,268</td>
                                                                <td>250</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 44,85%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Canada</td>
                                                                <td>1,325</td>
                                                                <td>400</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 45,23%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>America</td>
                                                                <td>1,150</td>
                                                                <td>320</td>
                                                                <td><span class="grow-up"><i class="fas fa-arrow-up"></i></span>&nbsp;&nbsp; 41,56%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>India</td>
                                                                <td>1,465</td>
                                                                <td>340</td>
                                                                <td><span class="grow-down"><i class="fas fa-arrow-down"></i></span>&nbsp;&nbsp; 47,79%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="bg-table pt-30 mt-20">
                                                <div class="chart-title pl-30 pr-30">
                                                    <h3>Annual Salary</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <div class="over">
                                                    <table class="mt-30">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Name</th>
                                                                <th>Designation</th>
                                                                <th>Month</th>
                                                                <th>Year</th>
                                                                <th>Total Day</th>
                                                                <th>Worked Days</th>
                                                                <th>CTC</th>
                                                            </tr>
                                                        </thead>
                                                        
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Adnan Chy</td>
                                                                <td>Designer(Web)</td>
                                                                <td>November</td>
                                                                <td>2019</td>
                                                                <td>30</td>
                                                                <td>30</td>
                                                                <td>60000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Jony Mridha</td>
                                                                <td>Designer(Web)</td>
                                                                <td>November</td>
                                                                <td>2019</td>
                                                                <td>30</td>
                                                                <td>30</td>
                                                                <td>60000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Hasibur Rahman</td>
                                                                <td>UI & UX(Web & App)</td>
                                                                <td>November</td>
                                                                <td>2019</td>
                                                                <td>30</td>
                                                                <td>30</td>
                                                                <td>80000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Shourav</td>
                                                                <td>UI & UX(Web & App)</td>
                                                                <td>November</td>
                                                                <td>2019</td>
                                                                <td>30</td>
                                                                <td>30</td>
                                                                <td>80000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>Shakil Ahmed</td>
                                                                <td>Office Administrator</td>
                                                                <td>November</td>
                                                                <td>2019</td>
                                                                <td>30</td>
                                                                <td>30</td>
                                                                <td>70000</td>
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