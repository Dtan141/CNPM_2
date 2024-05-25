import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
//giữ nguyên date trong postgresql mà không biến đổi gì
//pg.types.setTypeParser(pg.types.builtins.DATE, value => value)

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "CNPM_2",
  password: "Duytan1401",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("staff/staffinfo.ejs");
});


// Staff_LobbyReception
// Staff_MainScreen

app.get("/main", async (req, res) => {
  res.render("user/main.ejs");
});

app.post("/main", async (req, res) => {
  res.render("user/main.ejs");
});

app.get("/login", (req, res) => {
  res.render("login/login.ejs");
});

// staff thay doi quy dinh

// app.get("/", (req, res) => {
//   res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
// });

app.post("/thaydoiquydinh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/loaisanh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/ca", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
});

app.post("/monan", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn.ejs");
});

app.post("/dichvu", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu.ejs");
});

app.post("/thamso", async (req, res) => {
  res.render("staff/thaydoiquydinh/thamso/ThayDoiThamSo.ejs");
});

app.post("/themloaisanh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh_Them.ejs");
});

app.post("/xoaloaisanh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh_Xoa.ejs");
});

app.post("/sualoaisanh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh_Sua.ejs");
});

app.post("/themca", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa_Them.ejs");
});

app.post("/xoaca", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa_Xoa.ejs");
});

app.post("/suaca", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa_Sua.ejs");
});

app.post("/themmonan", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn_Them.ejs");
});

app.post("/xoamonan", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn_Xoa.ejs");
});

app.post("/suamonan", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn_Sua.ejs");
});

app.post("/themdichvu", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu_Them.ejs");
});

app.post("/xoadichvu", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu_Xoa.ejs");
});

app.post("/suadichvu", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu_Sua.ejs");
});

app.post("/themloaisanhngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/xoaloaisanhngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/sualoaisanhngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/themcangay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
});

app.post("/xoacangay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
});

app.post("/suacangay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
});

app.post("/themmonanngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn.ejs");
});

app.post("/xoamonanngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn.ejs");
});

app.post("/suamonanngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn.ejs");
});

app.post("/themdichvungay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu.ejs");
});

app.post("/xoadichvungay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu.ejs");
});

app.post("/suadichvungay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu.ejs");
});

app.post("/thaydoithamso", async (req, res) => {
  res.render("staff/thaydoiquydinh/thamso/ThayDoiThamSo_Sua.ejs");
});

// end staff thay doi quy dinh

// staff lobby

app.post("/updatelobby", async (req, res) => {
  res.render("staff/lobby/updatelobby.ejs");
});

app.post("/deletelobby", async (req, res) => {
  res.render("staff/lobby/deletelobby.ejs");
});

app.post("/createlobby", async (req, res) => {
  res.render("staff/lobby/createlobby.ejs");
});

app.post("/xacnhanxoasanh", async (req, res) => {
  res.render("staff/lobby/deletelobbydone.ejs");
});

// end staff lobby

// staff
// user/main.ejs
// staff/Staff_MainScreen.ejs

app.post("/login", (req, res) => {
  res.render("login/login.ejs");
});

// app.post("/dologin", async (req, res) => {
//   const username = req.body.username;
//   const matkhau = req.body.password;

//   try {
//     const result = await db.query("SELECT * FROM users WHERE username = $1", [
//       username,
//     ]);
//     if (result.rows.length > 0) {
//       const user = result.rows[0];
//       const dbpassword = user.matkhau;
//       if (matkhau === dbpassword) {
//         res.render("user/main.ejs", {
//           name: user.username,
//           email: user.email,
//           hovaten: user.hovaten,
//           sdt: user.sodienthoai,
//         });
//       } else {
//         res.send("Incorrect Password");
//       }
//     } else {
//       res.send("User not found");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

app.post("/confirmchange", (req, res) => {
  res.render("user/confirmchange.ejs");
});

// app.post("/dosignup", async (req, res) => {
//   const hovaten = req.body.hovaten;
//   const username = req.body.username;
//   const email = req.body.email;
//   const matkhau = req.body.matkhau;
//   const sodienthoai = req.body.sodienthoai;

//   const result = await db.query(
//     "INSERT INTO users (username, hovaten, email, matkhau, sodienthoai) VALUES($1, $2, $3, $4, $5) RETURNING *;",
//     [username, hovaten, email, matkhau, sodienthoai]
//   );

//   res.render("login/login.ejs");
// });

app.post("/signup", (req, res) => {
  res.render("login/signup.ejs");
});

app.post("/tiepnhansanh", (req, res) => {
  res.render("staff/lobby/lobby.ejs");
});

app.post("/tracuu", async (req, res) => {
  const temp_lookup_table = await db.query(`
  select p.tenchure, p.tencodau, s.tensanh, TO_CHAR(p.ngaydattiec, 'DD-MM-YYYY') AS ngaydattiec, c.giobatdau, c.gioketthuc, sum(p.soluongban+p.sobandutru) as soluongban
  from phieudattiec p, sanh s, ca c
  where p.masanh = s.masanh and p.maca = c.maca
  group by p.tenchure, p.tencodau, s.tensanh, p.ngaydattiec, c.giobatdau, c.gioketthuc
  `);

  const temp_lobby_selection = await db.query( `
  select tensanh
  from sanh
  where tinhtrang = 'Còn phục vụ'
  `)

  const temp_start_end_time = await db.query(`
    select giobatdau, gioketthuc
    from ca
  `)
  let start_end_time = temp_start_end_time.rows;
  let lobby_selection = temp_lobby_selection.rows;
  let lookup_table = temp_lookup_table.rows;
  res.render("staff/tracuu/Staff_LookUp.ejs", {lookup_table: lookup_table, lobby_selection: lobby_selection, start_end_time: start_end_time});
});

app.post("/lapbaocao", (req, res) => {
  res.render("staff/baocao/Staff_MonthlyReport.ejs");
});

//QUERY TAT CA HOA DON
app.post("/laphoadon", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT H.mahoadon, H.sophieudattiec, S.tensanh, TO_CHAR(P.ngaydattiec, 'DD-MM-YYYY') AS ngaydattiec, TO_CHAR(P.ngaydaitiec, 'DD-MM-YYYY') AS ngaydaitiec, H.tinhtrang 
      FROM HOADON H, PHIEUDATTIEC P, SANH S 
      WHERE H.sophieudattiec = P.sophieudattiec AND P.masanh = S.masanh
      ORDER BY H.mahoadon
      `);
    const hoadons = result.rows;
    res.render("staff/hoadon/Staff_ListBill.ejs", {
      hoadons: hoadons,
    });
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Sever Error');
  }
});

//QUERY 1 HOA DON THEO MA HOA DON
app.post('/timkiemhoadon', async (req, res) => {
  const billId = req.body.bill_id;
  const searchPattern = `%${billId}%`; // Mẫu tìm kiếm với ký tự %

  try {
    const result = await db.query(`
      SELECT H.mahoadon, H.sophieudattiec, S.tensanh, TO_CHAR(P.ngaydattiec, 'DD-MM-YYYY') AS ngaydattiec, TO_CHAR(P.ngaydaitiec, 'DD-MM-YYYY') AS ngaydaitiec, H.tinhtrang 
      FROM HOADON H
      JOIN PHIEUDATTIEC P ON H.sophieudattiec = P.sophieudattiec
      JOIN SANH S ON P.masanh = S.masanh
      WHERE H.mahoadon ilike $1
    `, [searchPattern]);

    if (result.rows.length > 0) {
      const hoadons = result.rows;
      res.render("staff/hoadon/Staff_ListBill.ejs", {
        hoadons: hoadons
      });
    } else {
      res.send('Không tìm thấy hóa đơn với mã này');
    }
  } catch (error) {
    console.error('Lỗi khi thực hiện truy vấn', error.stack);
    res.status(500).send('Lỗi server');
  }
});
//CHI TIET HOA DON CHUA THANH TOAN
app.post('/chitiethoadon', async (req, res) => {
  const BillId = req.body.bill_id;
  const BillStatus = req.body.bill_status;
    try {
      
      //thong tin chung cua tiec cuoi
      const temp_general_info = await db.query(`
        select H.mahoadon, H.sophieudattiec, P.tenchure, P.tencodau, P.dongiaban, TO_CHAR(P.ngaydaitiec, 'DD-MM-YYYY') AS ngaydaitiec, P.tongtienban 
        from HOADON H, PHIEUDATTIEC P, SANH S
        where H.sophieudattiec = P.sophieudattiec and P.masanh = S.masanh and H.mahoadon = $1
      `,[BillId]);
      const general_info = temp_general_info.rows;

      let num_table = await db.query(`
        select sum(p.soluongban + p.sobandutru) as soluongban
        from phieudattiec p, hoadon h
        where h.sophieudattiec = p.sophieudattiec and h.mahoadon = $1
      `, [BillId]);
      num_table = num_table.rows;
      num_table = num_table[0].soluongban;

      //thong tin chi tiet dich vu
      const temp_service_info = await db.query(`
        select d.tendichvu, c.soluong, c.dongia, c.thanhtien, c.ghichu
        from hoadon h, phieudattiec p, chitietdichvu c, dichvu d 
        where h.sophieudattiec = p.sophieudattiec and p.sophieudattiec = c.sophieudattiec  and c.madichvu = d.madichvu 
            and h.mahoadon = $1
       `, [BillId]);
      const service_info = temp_service_info.rows;

       // tong tien dich vu
       const temp_service_total_price = await db.query(`
       select  tongtiendichvu
       from hoadon  
       where mahoadon = $1
     `, [BillId]);
     let service_total_price = temp_service_total_price.rows;
     service_total_price = service_total_price[0].tongtiendichvu;

     //tong tien hoa don
     const temp_bill_total_price = await db.query(`
       select  tongtienhoadon
       from hoadon  
       where mahoadon = $1
     `, [BillId]);
     let bill_total_price = temp_bill_total_price.rows;
     bill_total_price = bill_total_price[0].tongtienhoadon;;

     //tien dat coc
     const temp_deposit = await db.query(`
       select P.tiendatcoc  
       from HOADON H, PHIEUDATTIEC P
       where H.sophieudattiec = P.sophieudattiec and MaHoaDon = $1
     `, [BillId]);
     let deposit = temp_deposit.rows;
     deposit = deposit[0].tiendatcoc;

      //Kiểm tra ngày thanh toán có cần cập nhật hay không. Nếu có nghĩa là thanh toán trễ-> tính tiền phạt
      let paying_date;
      let late_fee;

      if(BillStatus == 'Chưa thanh toán') {
        //update ngay thanh toan khi truy cap vao bill chua thanh toan
        const check_paying_date = await db.query(`
        update HOADON
        set ngaythanhtoan = CURRENT_DATE
        where ngaythanhtoan < CURRENT_DATE and mahoadon =  $1;
        `, [BillId]);
        //Ngay thanh toan
        const temp_paying_date = await db.query(`
            select TO_CHAR(ngaythanhtoan, 'DD-MM-YYYY') as ngaythanhtoan
            from hoadon
            where mahoadon = $1
          `, [BillId]);
        paying_date = temp_paying_date.rows;

        //So ngay tre
        const temp_num_late_date =  await db.query(`
        WITH ngaythanhtoan AS (
          SELECT ngaythanhtoan
          FROM hoadon
          WHERE mahoadon = $1
        ),
        ngaylaphoadon AS (
          SELECT ngaylaphoadon
          FROM hoadon
          WHERE mahoadon = $1
        )
        SELECT (ngaythanhtoan.ngaythanhtoan - ngaylaphoadon.ngaylaphoadon) AS difference_in_days
        FROM ngaythanhtoan, ngaylaphoadon;
        `, [BillId]);
        let num_late_date = temp_num_late_date.rows;
        num_late_date = num_late_date[0].difference_in_days;

        //Tinh phi thanh toan tre
        const temp_fining_rate = await db.query(`
        select giatri
        from thamso
        where tenthamso = 'TiLeTienPhat'
        `);
        let fining_rate = temp_fining_rate.rows;
        fining_rate = fining_rate[0].giatri;
        
        late_fee= fining_rate*num_late_date*bill_total_price;

        //update phi thanh toan tre vao DB
        let temp = await db.query( `
        update hoadon
        set phithanhtoantre = $1
        where mahoadon = $2
        `,[late_fee, BillId]);
        //update tien con lai vao DB
          // 1. lay so tien con lai truoc do
        let temp_remaining_money = await db.query(`
        select conlai
        from hoadon
        where mahoadon = $1
        `, [BillId]);
          // 2.tinh so tien con lai moi
        let remaining_money = temp_remaining_money.rows;
        remaining_money = remaining_money[0].conlai;
        remaining_money = bill_total_price - deposit - late_fee;

          // 3.update vao DB
        temp = await db.query(`
        update hoadon
        set conlai = $1
        where mahoadon = $2
        `,[remaining_money, BillId]);
        //update tinhtrang
        res.render("staff/hoadon/Staff_ListBill_Unpaid.ejs",{general_info: general_info, num_table: num_table, service_info:service_info, service_total_price: service_total_price, bill_total_price: bill_total_price, deposit: deposit, late_fee: late_fee, remaining_money: remaining_money, paying_date: paying_date});
      } else { //bill da thanh toan
        //select ngay thanh toan
        const temp_paying_date = await db.query(`
            select TO_CHAR(ngaythanhtoan, 'DD-MM-YYYY') as ngaythanhtoan
            from hoadon
            where mahoadon = $1
          `, [BillId]);
        paying_date = temp_paying_date.rows;

        //select phi thanh toan tre
        let temp_late_fee = await db.query(`
        select phithanhtoantre
        from hoadon
        where mahoadon = $1
        `,[BillId]);
        let late_fee = temp_late_fee.rows;
        late_fee = late_fee[0].phithanhtoantre;

        //select con lai
        let temp_remaining_money = await db.query(`
          select conlai
          from hoadon
          where mahoadon = $1
        `,[BillId]);
        let remaining_money = temp_remaining_money.rows;
        remaining_money = remaining_money[0].conlai;
        res.render("staff/hoadon/Staff_ListBill_PaidBill.ejs",{general_info: general_info, num_table: num_table, service_info:service_info, service_total_price: service_total_price, bill_total_price: bill_total_price, deposit: deposit, late_fee: late_fee, remaining_money: remaining_money, paying_date: paying_date});

      }

    } catch (error) {
      console.error('Lỗi khi thực hiện truy vấn', error.stack);
      res.status(500).send('Lỗi server');
    }
});

app.get("/laphoadon", async (req,res) => {
  const bill_id = req.query.bill_id;
  console.log(bill_id);
  try {
    //update tinh trang
    let temp = await db.query(`
      update hoadon
      set tinhtrang = 'Đã thanh toán'
      where mahoadon = $1
    `,[bill_id]);
    //update so tien con lai
    temp = await db.query(`
    update hoadon
    set conlai = 0
    where mahoadon = $1
    `,[bill_id]);

    const result = await db.query(`
      SELECT H.mahoadon, H.sophieudattiec, S.tensanh, TO_CHAR(P.ngaydattiec, 'DD-MM-YYYY') AS ngaydattiec, TO_CHAR(P.ngaydaitiec, 'DD-MM-YYYY') AS ngaydaitiec, H.tinhtrang 
      FROM HOADON H, PHIEUDATTIEC P, SANH S 
      WHERE H.sophieudattiec = P.sophieudattiec AND P.masanh = S.masanh
      ORDER BY H.mahoadon
      `);
    const hoadons = result.rows;
    res.render("staff/hoadon/Staff_ListBill.ejs", {
      hoadons: hoadons,
    });
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Sever Error');
  }
});



app.post("/thongtin", (req, res) => {
  res.render("staff/staffinfo.ejs");
});

app.post("/adminmain", async (req, res) => {
  res.render("admin/main.ejs");
});

app.post("/deleteuser", async (req, res) => {
  res.render("admin/deleteuser.ejs");
});

app.post("/deleteuserdone", async (req, res) => {
  res.render("admin/deleteuserdone.ejs");
});

app.post("/updateuser", async (req, res) => {
  res.render("admin/updateuser.ejs");
});

app.post("/createuser", async (req, res) => {
  res.render("admin/createuser.ejs");
});

// user

app.post("/userinfo", async (req, res) => {
  res.render("user/main.ejs");
});

app.post("/dattiec", async (req, res) => {
  res.render("user/dattiec/dattiec.ejs");
});

app.post("/userthemmonan", async (req, res) => {
  res.render("user/dattiec/themmonan.ejs");
});

app.post("/userthemdichvu", async (req, res) => {
  res.render("user/dattiec/themdichvu.ejs");
});

app.post("/usertracuu", async (req, res) => {
  res.render("user/tracuu/UserLookUp.ejs");
});

app.post("/logout", async (req, res) => {
  res.render("login/login.ejs");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
