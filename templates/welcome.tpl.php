<body>

<div class="sidebar">
    <a href="http://chess.kursi.cloudns.cl/" class="nav-link"><i class="fas fa-chess-board"><span class="nav-text">Chess</span></i></a>
    <a href="http://toms.kursi.cloudns.cl/laimesrats/" class="nav-link"><i class="fas fa-chart-pie"><span class="nav-text">Wheel of fortune</span></i></a>
    <a href="http://toms.kursi.cloudns.cl/air-hockey/" class="nav-link"><i class="fas fa-hockey-puck"><span class="nav-text">Air hockey</span></i></a>
    <a href="http://toms.kursi.cloudns.cl/todolist/" class="nav-link"><i class="fas fa-list-alt"><span class="nav-text">To do list</span></i></a>
</div>

<div class="container">
    <div class="row">
        <div class="col header-top">
            <p>Sveiki, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>.</p>
            <a href="logout.php">Iziet</a>
            <a href="reset-password.php">Mainīt paroli</a>
        </div>
    </div>
</div>


<div class="testimonials text-center">
    <div class="container">
      <h1>Covid 19</h1>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center">
            <i class="fas fa-syringe fa-3x card-img-top rounded-circle test-ic" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Cilvēki, kas saņēmuši 2. poti.</p>
              <div class="vaccinated-cont">
              <span id="vaccinated"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center">
            <i class="fas fa-vials fa-3x card-img-top rounded-circle test-ic" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Kopā testēti cilvēki Latvijā</p>
              <div class="vaccinated-cont">
              <span id="tested"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center">
            <i class="fas fa-calendar-alt fa-3x card-img-top rounded-circle test-ic" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Datums, kurā tiks sasniegts 70% vakcinēto personu skaits Latvijā ar pašreizējo potēšanas tempu</p>
              <h3><span id="safety-days"></span></h3>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

<div class="container">
    <div class="row">
        <div class="col d-flex justify-content-center">
        <canvas id="heatmap" width="800" height="400"></canvas>
        </div>
    </div>  
</div>
<footer>
    <p>Izmantotie resursi datu iegūšanā - <a href="https://data.gov.lv/dati/lv/dataset/covid19-vakcinacijas/resource/51725018-49f3-40d1-9280-2b13219e026f" style="color: darkorange;">Vakcināciju dati</a> un <a href="https://data.gov.lv/dati/lv/dataset/covid-19/resource/d499d2f0-b1ea-4ba2-9600-2c701b03bd4a?inner_span=True" style="color: darkorange;">Covid 19 dati Latvijā</a></p>    
</footer>

    <script src="assets/Chart.HeatMap-0.0.1-alpha/dst/Chart.HeatMap.S.js"></script>
    <script src="assets/scripts.js"></script>
</body>
</html>
