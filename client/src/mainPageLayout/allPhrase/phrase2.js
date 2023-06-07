import './phrase2.css';
import HeaderMainPage from '../../components/headerMainPage/headerMainPage';
import Formunit from '../../components/formUnit/formUnit';
import Button from '../../components/button/button';

function Phrase2() {
    return (
        <>
            <div className='coverPhrase2'>
                <HeaderMainPage headertitle='Tạo tài khoản cho trung tâm đăng kiểm' />

                <section className='info'>
                    <div className='infoTitle'>
                        <h1>Thông tin của trung tâm đăng kiểm</h1>
                    </div>

                    <br></br>
                    <br></br>

                    <form>
                        <div className='formRow'>

                            <Formunit label='Tên trung tâm đăng kiểm' type='text' />

                            <Formunit label='Mã số thuế' type='number' />

                        </div>

                        <div className='formRow'>

                            <Formunit label='Địa chỉ' type='text' />

                            <Formunit label='Số điện thoại' type='number' />

                        </div>

                        <div className='formRow'>

                            <Formunit label='Email' type='email' />

                            <Formunit label='Mật khẩu' type='password' />

                        </div>

                        <div className='formRow'>

                            <Formunit label='Nhập lại mật khẩu' type='password' />

                        </div>

                        <div className='buttonCover'>
                            <Button nameOfButton="Send"></Button>
                        </div>

                    </form>
                </section>
            </div>
        </>
    )
}

export default Phrase2;