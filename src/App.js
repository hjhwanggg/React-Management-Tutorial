import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961212',
  'gender' : '남자', 
  'job' : '학생'
  }, 
  {
    'id' : 2,
    'image' : 'http://placeimg.com/64/64/2',
    'name' : '홍일동',
    'birthday' : '961012',
    'gender' : '남자', 
    'job' : '대학생'
    }, 
    {
      'id' : 3,
      'image' : 'http://placeimg.com/64/64/3',
      'name' : '홍에동',
      'birthday' : '960812',
      'gender' : '남자', 
      'job' : '프로그래머'
      }, 
]

function App() {
  return (
    <div>
      {customers.map(c => {
          return ( 
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
          );
        })
      }
    </div>
  );
}

export default App;
