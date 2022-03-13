import MainLayout from './components/layouts/MainLayout';
import DocumentTitle from 'react-document-title'

function Contact() {
    return (
        <MainLayout>
            <DocumentTitle title="​ຕິດ​ຕໍ່​ເຮົາ" />
            {/*Sai Map thi u*/}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.959287487951!2d105.83266395017422!3d15.109497989428322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ffe1576ee13db71!2zMTXCsDA2JzM0LjIiTiAxMDXCsDUwJzA1LjUiRQ!5e1!3m2!1sth!2sla!4v1647158139732!5m2!1sth!2sla" width={'100%'} height={500} style={{border: 0}} allowFullScreen loading="lazy" /> */}
        <div>
            <div className="jumbotron pt-5">
                <h1 className="dispay-6">​ຕິດ​ຕໍ່​ເຮົາ</h1>
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas provident a sequi nobis non id possimus temporibus repellat, excepturi nisi enim quos quidem, eum natus veniam totam in doloribus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas provident a sequi nobis non id possimus temporibus repellat, excepturi nisi enim quos quidem, eum natus veniam totam in doloribus.</p>
            </div>
        </div>
        </MainLayout>
    );
}

export default Contact;