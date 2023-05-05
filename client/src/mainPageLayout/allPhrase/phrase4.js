import Formunit from "../../components/formUnit/formUnit";
import HeaderMainPage from "../../components/headerMainPage/headerMainPage";

const Phrase4 = () => {
    return (
        <div className="phrase4">
            <HeaderMainPage headertitle='Đăng kí cho phương tiện' />

            <section className="car-info">
                <div className="title">Thông tin phương tiện</div>

                <br /><br />

                <form>
                    <div className="formRow">
                        <Formunit label='Mã số' />
                        <Formunit label='Ngày cấp' type='date' />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Phrase4;