import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {
  transform(users: any[], filterCategory: string, search : string): any {
    search = search.toLowerCase();
    console.log(filterCategory)
    if(!users || (!filterCategory && (search =='' || !search)) || (filterCategory == 'All' && (search == '' || !search))){
      return users;
    }
    if(filterCategory == 'All') {
      return users.filter(user=> user.name.first.toLowerCase().includes(search) 
      || user.name.last.toLowerCase().includes(search));
    }else{
      return users.filter(user=> user.name.first.toLowerCase().includes(search) 
      || user.name.last.toLowerCase().includes(search))
      .filter(user => user.profession.type === filterCategory);
    }
  }
}
