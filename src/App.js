import './App.css';
import Customer from './components/Customer';

const customer = {
  'id': '1',
  'image' : 'https://placeimg.com/64/64/people',
  'name': '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
}

function App() {
  return (
    <Customer
      id={customer.id}
      image={customer.image}
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
