import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryListComponent} from './dictionary/dictionary-list/dictionary-list.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';
import {DictionaryCreateComponent} from './dictionary/dictionary-create/dictionary-create.component';


const routes: Routes = [{
  path: '',
  component: DictionaryListComponent
}, {
  path: 'dictionaries',
  component: DictionaryListComponent
},
  {
    path: 'dictionaries/view/:word',
    component: DictionaryDetailComponent
  }, {
    path: 'dictionaries/create',
    component: DictionaryCreateComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
