import './App.css';
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Spinner from './Spinner/Spinner';
import Switch from '@material-ui/core/Switch';

const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [loading, setLoading] = useState(false)
  const classes = Styles();
  const [doi1, setDoi1] = useState([])
  const [doi2, setDoi2] = useState([])

  function Quay() {
    setLoading(true)
    var group1 = []
    var group2 = []
    var arrGroup1 = []
    var arrGroup2 = []
    if (state['checkedThanhDat'] === true) group1.push('Thành Đạt')
    if (state['checkedQuangDat'] === true) group1.push('Quang Đạt')
    if (state['checkedToan'] === true) group1.push('Dương Toản')
    if (state['checkedTung'] === true) group1.push('Tùng')
    if (state['checkedHao'] === true) group1.push('Hào')
    if (state['checkedMinh'] === true) group1.push('Minh')
    if (state['checkedDu'] === true) group1.push('Dự')
    if (state['checkedSon'] === true) group1.push('Sơn')
    if (state['checkedHa'] === true) group1.push('Hà')
    if (state['checkedDo'] === true) group1.push('Độ')

    if (state['checkedViet'] === true) group2.push('Việt')
    if (state['checkedVietVo'] === true) group2.push('Việt võ')
    if (state['checkedHung'] === true) group2.push('Hùng')
    if (state['checkedVu'] === true) group2.push('Vũ')
    if (state['checkedThuc'] === true) group2.push('Thực')
    if (state['checkedThang'] === true) group2.push('Thắng')
    if (state['checkedDuc'] === true) group2.push('Đức')
    if (state['checkedBan1'] === true) group2.push('Bạn 1')
    if (state['checkedBan2'] === true) group2.push('Bạn 2')
    if (state['checkedBan3'] === true) group2.push('Bạn 3')

    var index = 1
    while (group1.length !== 0) {
      var rand = group1[Math.floor(Math.random() * group1.length)];
      if (index === 1) {
        arrGroup1.push(rand)
        index = 2
      } else {
        arrGroup2.push(rand)
        index = 1
      }
      var vitri = group1.indexOf(rand)
      group1.splice(vitri, 1)
    }

    while (group2.length !== 0) {

      const rand = group2[Math.floor(Math.random() * group2.length)];
      if (index === 1) {
        arrGroup1.push(rand)
        index = 2
      } else {
        arrGroup2.push(rand)
        index = 1
      }
      const vitri = group2.indexOf(rand)
      group2.splice(vitri, 1)
    }

    setDoi1(arrGroup1)
    setDoi2(arrGroup2)

    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }
  const [state, setState] = useState({
    checkedThanhDat: false,
    checkedQuangDat: false,
    checkedToan: false,
    checkedTung: false,
    checkedDo: false,
    checkedHao: false,
    checkedMinh: false,
    checkedViet: false,
    checkedVietVo: false,
    checkedThuc: false,
    checkedDu: false,
    checkedHung: false,
    checkedSon: false,
    checkedVu: false,
    checkedDuc: false,
    checkedHa: false,
    checkedThang: false,
    checkedBan1: false,
    checkedBan2: false,
    checkedBan3: false
  });
  console.log(state.variant)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="App">
      <h2>Random đội CNPM16 - MTA</h2>
      <div className='chiaNhom'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <div>
                  <h3>Nhóm 1</h3>
                  <div className='listNguoi'>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedThanhDat}
                        onChange={handleChange}
                        name="checkedThanhDat"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Thành Đạt</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedQuangDat}
                        onChange={handleChange}
                        name="checkedQuangDat"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Quang Đạt</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedToan}
                        onChange={handleChange}
                        name="checkedToan"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Toản</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedTung}
                        onChange={handleChange}
                        name="checkedTung"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Tùng</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedMinh}
                        onChange={handleChange}
                        name="checkedMinh"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Minh</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedHao}
                        onChange={handleChange}
                        name="checkedHao"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Hào</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedSon}
                        onChange={handleChange}
                        name="checkedSon"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Sơn</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedHa}
                        onChange={handleChange}
                        name="checkedHa"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Hà</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedDo}
                        onChange={handleChange}
                        name="checkedDo"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Độ</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedDu}
                        onChange={handleChange}
                        name="checkedDu"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Dự</h4>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <div>
                  <h3>Nhóm 2</h3>
                  <div className='listNguoi'>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedViet}
                        onChange={handleChange}
                        name="checkedViet"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Việt</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedThuc}
                        onChange={handleChange}
                        name="checkedThuc"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Thực</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedVu}
                        onChange={handleChange}
                        name="checkedVu"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Vũ</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedHung}
                        onChange={handleChange}
                        name="checkedHung"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Hùng</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedThang}
                        onChange={handleChange}
                        name="checkedThang"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Thắng</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedDuc}
                        onChange={handleChange}
                        name="checkedDuc"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Đức</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedVietVo}
                        onChange={handleChange}
                        name="checkedVietVo"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Việt Võ</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedBan1}
                        onChange={handleChange}
                        name="checkedBan1"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Bạn 1</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedBan2}
                        onChange={handleChange}
                        name="checkedBan2"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>bạn 2</h4>
                    </div>
                    <div className='nguoi'>
                      <Switch
                        checked={state.checkedBan3}
                        onChange={handleChange}
                        name="checkedBan3"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <h4 className='name'>Bạn 3</h4>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <Button size="large" variant="contained" color="secondary" style={{ marginTop: '20px', marginBottom: '20px' }} onClick={() => Quay()}>
        Quay
      </Button>
      <div className='ketQua'>
        <div className={classes.root}>
          {
            loading ? <Spinner /> :
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <div>
                      <h4>Đội 1</h4>
                      {
                        doi1.map((item, index) => {
                          return (
                            <>
                              <Button variant="contained" color="primary" key={index} style={{ width: '150px' }}>
                                {item}
                              </Button>
                              <br /><br />
                            </>
                          )
                        })
                      }
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <div>
                      <h4>Đội 2</h4>
                      {
                        doi2.map((item, index) => {
                          return (
                            <>
                              <Button variant="contained" color="primary" key={index} style={{ width: '150px' }}>
                                {item}
                              </Button>
                              <br /><br />
                            </>
                          )
                        })
                      }
                    </div>
                  </Paper>
                </Grid>
              </Grid>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
