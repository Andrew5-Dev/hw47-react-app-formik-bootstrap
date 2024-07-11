import RegistrationForm from './components/RegistrationForm.tsx'

const App = () => {
    return (
        <div className="container-lg p-5 ">
            <div className="row justify-content-center " >
                <div className="col-5 bg-light ">
                    <h1 className="my-5 text-center">Реєстрація</h1>
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
}

export default App