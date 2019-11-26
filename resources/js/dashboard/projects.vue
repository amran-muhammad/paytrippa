<template>
    <div>
        <div class="container">
                            <div class="title pb-5">
                                <h1>Dashboard <span>Home</span> <span>|</span> <span>Project</span></h1>
                            </div>
                            <div class="section-content">
                                <div class="row">
                                    <div class="content-card-body mt-10">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="pro-card-indi pro-card-indi-info mt-20 card-box-shadow border-radius-3">
                                                <div class="pro-card-title">
                                                    <p>Photography</p>
                                                    <h3>25</h3>
                                                </div>
                                                <div class="complete-part pt-40">
                                                    <p>Task Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="pro-card-indi pro-card-indi-primary mt-20 card-box-shadow border-radius-3">
                                                <div class="pro-card-title">
                                                    <p>Admin Tamplete</p>
                                                    <h3>10</h3>
                                                </div>
                                                <div class="complete-part pt-40">
                                                    <p>Task Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="pro-card-indi pro-card-indi-warning mt-20 card-box-shadow border-radius-3">
                                                <div class="pro-card-title">
                                                    <p>Flank</p>
                                                    <h3>15</h3>
                                                </div>
                                                <div class="complete-part pt-40">
                                                    <p>Task Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="pro-card-indi pro-card-indi-purple mt-20 card-box-shadow border-radius-3">
                                                <div class="pro-card-title">
                                                    <p>Hey Korean</p>
                                                    <h3>30</h3>
                                                </div>
                                                <div class="complete-part pt-40">
                                                    <p>Task Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-10">
                                    <div class="col-md-6">
                                        <div class="pro-bar-chart card-box-shadow mt-20 pt-30 pb-30 border-radius-3">
                                            <div class="chart-title pl-30 mb-40">
                                                <h3>Issues</h3>
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
                                            <div class="row">
                                                <div class="col-md-7 col-sm-7 col-xs-12">
                                                    <canvas id="pro-barChart" class="pl-15 pr-10" height="400" width="250"></canvas>
                                                </div>
                                                <div class="col-md-5 col-sm-5 col-xs-12">
                                                    <div class="row">
                                                        <div class="pro-small-chart-sec">
                                                            <div class="col-md-11 col-sm-11 col-xs-6">
                                                                <div class="border-radius-3 mt-30 small-chart small-chart-primary pl-15 pr-15">
                                                                    <div class="small-chart-title pt-20">
                                                                        <p>Created</p>
                                                                        <h3>57</h3>
                                                                    </div>
                                                                    <canvas id="prosmallChart1" width="200px" height="150px"></canvas>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-11 col-sm-11 col-xs-6">
                                                                <div class="border-radius-3 mt-30 small-chart small-chart-purple pl-15 pr-15">
                                                                    <div class="small-chart-title pt-20">
                                                                        <p>Closed</p>
                                                                        <h3>45</h3>
                                                                    </div>
                                                                    <canvas id="prosmallChart2" width="200px" height="150px"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="ana-line-chart card-box-shadow pt-30 pb-30 border-radius-3 mt-20">
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
                                            <canvas id="multiLineChart" class="pl-20 pr-20" width="400" height="300"></canvas>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="pro table mt-10">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="bg-table pt-30 card-box-shadow mt-20">
                                                <div class="chart-title pl-30 pr-30">
                                                    <h3>Recent Project</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <div class="over">
                                                    <table class="mt-30">
                                                        <thead>
                                                            <tr>
                                                                <th>Status</th>
                                                                <th>Project Name</th>
                                                                <th>Start Date</th>
                                                                <th>Due Date</th>
                                                                <th>Clients</th>
                                                            </tr>
                                                        </thead>
                                                        
                                                        <tbody>
                                                            <tr>
                                                                <td><span class="open">Work in Progress</span></td>
                                                                <td>App design and development</td>
                                                                <td>Jan 03, 2015</td>
                                                                <td>Oct 12, 2018</td>
                                                                <td>Halette Boivin</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="progress">Running</span></td>
                                                                <td>Coffee detail page - Main Page</td>
                                                                <td>Sep 21, 2016</td>
                                                                <td>May 05, 2018</td>
                                                                <td>Durandana Jolicoeur</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="closed">Complete</span></td>
                                                                <td>Poster illustation design</td>
                                                                <td>Mar 08, 2018</td>
                                                                <td>Sep 22, 2018</td>
                                                                <td>Lucas Sabourin</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="open">Running</span></td>
                                                                <td>Drinking bottle graphics</td>
                                                                <td>Oct 10, 2017</td>
                                                                <td>May 07, 2018</td>
                                                                <td>Donatien Brunelle</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="progress">Work In progress</span></td>
                                                                <td>Landing page design - Home</td>
                                                                <td>Oct 18, 2017</td>
                                                                <td>May 25, 2021</td>
                                                                <td>Karel Auberjo</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="bg-table pt-30 card-box-shadow mt-20">
                                                <div class="chart-title pl-30 pr-30">
                                                    <h3>Our Best Seller</h3>
                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                </div>
                                                <div class="over">
                                                    <table class="mt-30">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Name</th>
                                                                <th>Account</th>
                                                                <th>Saling</th>
                                                                <th>Percentage</th>
                                                            </tr>
                                                        </thead>
                                                        
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Nick Stone</td>
                                                                <td>NikyBlack87@gmail.com</td>
                                                                <td>21,562</td>
                                                                <td><span class="grow-up">&nbsp;&nbsp; 46,53%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Milano Esco</td>
                                                                <td>Milanoesco56@gmal.com</td>
                                                                <td>2,062</td>
                                                                <td><span class="grow-up">&nbsp;&nbsp; 34,13%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Wiltor Noice</td>
                                                                <td>Wiltornoice34@gmail.com</td>
                                                                <td>9,562</td>
                                                                <td><span class="grow-up">&nbsp;&nbsp; 39,83%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Anna Strong</td>
                                                                <td>Annastrong67@gmail.com</td>
                                                                <td>1002</td>
                                                                <td><span class="grow-up">&nbsp;&nbsp; 24,73%</td>
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
    </div>
</template>