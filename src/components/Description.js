const Description = () => {
  const design = { color: "red", textAlign: "center", fontSize: "2rem" };
  return (
    <div className="container mb-4">
      <div className="card shadow">
        <div className="card-body ">
          <p className="container" style={design}>
            สรุปบัญชีรายรับ - รายจ่าย และยอดคงเหลือ
          </p>
        </div>
      </div>
    </div>
  );
};
export default Description;
