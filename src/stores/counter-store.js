import { observable, action } from 'mobx';

class CounterStore {
    @observable
    count = 1;

  @action increment = ()=> {
    this.count++;
  }
  @action decrement = () => {
    this.count--;
  }
}
export default new CounterStore();