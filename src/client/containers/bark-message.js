import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.dog.get('hasBarked') ? 'The dog barked!' : 'No barks yet',
});

export default connect(mapStateToProps)(Message);
