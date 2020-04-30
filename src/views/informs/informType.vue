<template>
    <div class="informType">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">测试模块</a></li>
                <li class="breadcrumb-item active" aria-current="page">模块分类</li>
            </ol>
        </nav>
        <div class="pt-3 ">
            <button type="button" class="btn btn-primary">新增分类</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
        </div>
        <div class="card text-center" style="margin-top:15px">
            <div class="card-header" style="background:#36A9E1">新订单</div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- 时间条 -->
        <div class="card" style="margin-top:15px">
            <div class="card-header" style="background:#36A9E1">时间进度</div>
            <div class="card-body">
                <div class="progress" style="margin-top:10px">
                    <div
                        class="progress-bar progress-bar-striped"
                        role="progressbar"
                        style="width: 10%;"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <div class="progress" style="margin-top:10px">
                    <div
                        class="progress-bar progress-bar-striped bg-success"
                        role="progressbar"
                        style="width: 25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <div class="progress" style="margin-top:10px">
                    <div
                        class="progress-bar progress-bar-striped bg-info"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <div class="progress" style="margin-top:10px">
                    <div
                        class="progress-bar progress-bar-striped bg-warning"
                        role="progressbar"
                        style="width: 75%"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <div class="progress" style="margin-top:10px">
                    <div
                        class="progress-bar progress-bar-striped bg-danger"
                        role="progressbar"
                        style="width: 100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
        </div>
        <!-- 分割kaui -->
        <div class="row" style="margin-top:15px">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header" style="background:red"></div>
                    <div class="card-body">
                        <div class="alert alert-primary" role="alert">
                            A simple primary alert—check it out!
                        </div>
                        <div class="alert alert-secondary" role="alert">
                            A simple secondary alert—check it out!
                        </div>
                        <div class="alert alert-success" role="alert">
                            A simple success alert—check it out!
                        </div>
                        <div class="alert alert-danger" role="alert">
                            A simple danger alert—check it out!
                        </div>
                        <div class="alert alert-warning" role="alert">
                            A simple warning alert—check it out!
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header" style="background:yellow"></div>
                    <div class="card-body">
                        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="@/assets/image/banner1.jpg" style="height:280px" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="@/assets/image/banner2.jpg" style="height:280px" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="@/assets/image/banner3.jpg" style="height:280px" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                                </div>
                            </div>
                            <a
                                class="carousel-control-prev"
                                href="#carouselExampleCaptions"
                                role="button"
                                data-slide="prev"
                            >
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a
                                class="carousel-control-next"
                                href="#carouselExampleCaptions"
                                role="button"
                                data-slide="next"
                            >
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
