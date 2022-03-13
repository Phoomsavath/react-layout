import MainLayout from './components/layouts/MainLayout';
import DocumentTitle from 'react-document-title'

function Service() {
  return (
    <MainLayout>
        <DocumentTitle title="​ບໍ​ລ​ິ​ການ" />
    <div>
        <div className="jumbotron pt-5">
            <h1 className="dispay-6">​ບໍ​ລ​ິ​ການ</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas provident a sequi nobis non id possimus temporibus repellat, excepturi nisi enim quos quidem, eum natus veniam totam in doloribus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas provident a sequi nobis non id possimus temporibus repellat, excepturi nisi enim quos quidem, eum natus veniam totam in doloribus.</p>
        </div>
    </div>
    </MainLayout>
  );
}

export default Service;