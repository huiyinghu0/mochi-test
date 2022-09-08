import { connect } from 'react-redux'
import { changeLang } from '../redux/actions/localizationAction'

const SignupTitle = (props) => {
    console.log(props)
    return (<>
        <p className='signup-title'>Sign up to your account</p>
        <button onClick={changeLang}>change language</button>
    </>)
}

const mapStateToProps = state => {
    return {
        title: state.title
    }
}

const mapDispatchToProps = dispatch => ({

    changeLang: () => dispatch(changeLang())

})

export default connect(mapStateToProps,
    mapDispatchToProps)(SignupTitle)