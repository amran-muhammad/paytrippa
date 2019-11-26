<template>
  <div>
    <div class="sidebar-logo v1 v1-collapse">
        <div class="product-content-logo v1-product-content product-content-scrollbar">
            <div class="navbar-admin">
                <figure>
                    <img src="assets/images/user-img.png" alt="">
                </figure>
                <div class="user-name text-center mt-15">
                    <h3>Sadek Hossain</h3>
                </div>
            </div>
            <ul class="nav1">
                <h3 class="menu-list-title">Personal</h3>
                <li class="active">
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-home"></i></span>Dashboard<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse self-collapse-in">
                        <li> <router-link to="/index">
                            <span class="name">Index</span>
                            </router-link></li>
                        <li>
                            <router-link to="/analytics">
                            <span class="name">Analytics</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/ecomerces">
                            <span class="name">Ecommerces</span>
                           </router-link>

                        </li>
                        <li>
                              <router-link to="/projects">
                            <span class="name">Projects</span>
                           </router-link>

                        </li>
                    </ul>
                </li>
                <li>
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-cog"></i></span>Widgets<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="widgets.html"><span class="name">Widgets</span> </a></li>
                        <li><a href="map.html"><span class="name">Map</span> </a></li>
                    </ul>
                </li>
                <h3 class="menu-list-title">Apps</h3>
                <li>
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-at"></i></span>Email<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="inbox.html"><span class="name">Inbox</span> </a></li>
                        <li><a href="compose.html"><span class="name">Compose</span> </a></li>
                        <li><a href="sent.html"><span class="name">Sent</span> </a></li>
                        <li><a href="draft.html"><span class="name">Draft</span> </a></li>
                        <li><a href="trash.html"><span class="name">Trash</span> </a></li>
                    </ul>
                </li>
                <li>
                    <a href="todo.html"><span class="menu-icon"><i class="fas fa-check"></i></span>ToDo</a>
                </li>
                <li>
                    <a href="chat.html"><span class="menu-icon"><i class="fas fa-comment-dots"></i></span>Chat</a>
                </li>
                <li>
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-users"></i></span>Employee<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="employee.html"><span class="name">Employee List</span> </a></li>
                        <li><a href="employee-details.html"><span class="name">Employee Details</span> </a></li>
                    </ul>
                </li>
                <li>
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-users"></i></span>Contact<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="contact.html"><span class="name">Contact List</span> </a></li>
                        <li><a href="contact-details.html"><span class="name">Contact Details</span> </a></li>
                    </ul>
                </li>
                <li>
                    <a href="profile.html"><span class="menu-icon"><i class="fas fa-user-alt"></i></span>Profile</a>
                </li>
                <li>    
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-poll-h"></i></span>Ecommerce<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="product.html"><span class="name">Product</span> </a></li>
                        <li><a href="product-page.html"><span class="name">Product Page</span> </a></li>
                        <li><a href="product-list.html"><span class="name">Product List</span> </a></li>
                        <li><a href="payment.html"><span class="name">Payment Details</span> </a></li>
                        <li><a href="invoice.html"><span class="name">Invoice</span> </a></li>
                    </ul>
                </li>
                <li>
                    <a href="ecommerce-pa.html"><span class="menu-icon"><i class="fas fa-ticket-alt"></i></span>Support Tickets</a>
                </li>
                <h3 class="menu-list-title">Components</h3>
                <li>    
                    <a class="self-collapsable"><span class="menu-icon"><i class="fab fa-uikit"></i></span>User Interface<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="card.html"><span class="name">Cards</span> </a></li>
                        <li><a href="button.html"><span class="name">Buttons</span> </a></li>
                        <li><a href="tab.html"><span class="name">Tabs</span> </a></li>
                        <li><a href="accordion.html"><span class="name">Accordions</span> </a></li>
                        <li><a href="breadcrumb.html"><span class="name">Breadcrumbs</span> </a></li>
                        <li><a href="dropdown.html"><span class="name">Dropdowns</span> </a></li>
                        <li><a href="modal.html"><span class="name">Modals</span> </a></li>
                        <li><a href="progress.html"><span class="name">Progress Bars</span> </a></li>
                        <li><a href="pagination.html"><span class="name">Paginations</span> </a></li>
                        <li><a href="tooltip.html"><span class="name">Tooltips</span> </a></li>
                        <li><a href="Badge.html"><span class="name">Badges</span> </a></li>
                        <li><a href="slider.html"><span class="name">Sliders</span> </a></li>
                        <li><a href="icon.html"><span class="name">Icons</span> </a></li>
                        <li><a href="image-gall.html"><span class="name">Image Gallary</span> </a></li>
                        <li><a href="table.html"><span class="name">Tables</span> </a></li>
                        <li><a href="timeline.html"><span class="name">Timelines</span> </a></li>
                    </ul>
                </li>
                <li>    
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-file-upload"></i></span>Forms<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="form.html"><span class="name">Basic Form</span> </a></li>
                        <li><a href="form-layout.html"><span class="name">Form Layout</span> </a></li>
                        <li><a href="file-up.html"><span class="name">File Upload</span> </a></li>
                        <li><a href="form-input.html"><span class="name">Form Input</span> </a></li>
                        <li><a href="form-wizard.html"><span class="name">Form Wizard</span> </a></li>
                        <li><a href="form-validation.html"><span class="name">Form Validation</span> </a></li>
                    </ul>
                </li>
                <h3 class="menu-list-title">Pages</h3>
                <li>    
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-fingerprint"></i></span>Authentication<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="login.html"><span class="name">Login</span> </a></li>
                        <li><a href="loginv2.html"><span class="name">Login v2</span> </a></li>
                        <li><a href="loginv3.html"><span class="name">Login v3</span> </a></li>
                        <li><a href="register.html"><span class="name">Register</span> </a></li>
                        <li><a href="registerv2.html"><span class="name">Register v2</span> </a></li>
                        <li><a href="registerv3.html"><span class="name">Register v3</span> </a></li>
                        <li><a href="forgetpassword.html"><span class="name">Forget Password</span> </a></li>
                        <li><a href="lockscreen.html"><span class="name">Lock Screen</span> </a></li>
                        <li><a href="mailconfirmation.html"><span class="name">Mail Confirmation</span> </a></li>
                        <li><a href="404-error.html"><span class="name">404 Error</span> </a></li>
                    </ul>
                </li>
                <li>
                    <a href="price.html"><span class="menu-icon"><i class="fas fa-tags"></i></span>Pricing</a>
                </li>
                <h3 class="menu-list-title">Charts & Maps</h3>
                <li>    
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-chart-bar"></i></span>Charts<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="chartjs.html"><span class="name">Chart JS</span> </a></li>
                    </ul>
                </li>
                <li>    
                    <a class="self-collapsable"><span class="menu-icon"><i class="fas fa-map"></i></span>Maps<span class="determiner-icon"><i class="fas fa-chevron-down"></i></span></a>
                    <ul class="self-collapse">
                        <li><a href="vectormap.html"><span class="name">Vector Maps</span> </a></li>
                    </ul>
                </li>
                <h3 class="menu-list-title">Support</h3>
                <li>
                    <a href="documentation.html"><span class="menu-icon"><i class="fas fa-file-word"></i></span>Documentation</a>
                </li>
                <li>
                    <a href="faq.html"><span class="menu-icon"><i class="fas fa-question-circle"></i></span>Faqs</a>
                </li>
            </ul>
        </div>
    </div> 
  </div>
</template>
<script>
export default {};
</script>