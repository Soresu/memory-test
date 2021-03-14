import $ from 'jquery';

export const MAX_TODO = 10000;
export const MAX_TODO_CONTAINER = 5;

let todoCt = 0;

export const timeout = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const getTodos = function() {
  let result = [];
  for (let i = 0; i < MAX_TODO; i++) {
    result.push({
      id: i,
      text: `Lorem ${todoCt}. ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies nunc sit amet diam aliquet fermentum. Proin vitae lorem eros. Sed vitae mi vitae ex feugiat condimentum. Ut varius massa eu orci aliquet accumsan. Ut ipsum arcu, aliquet nec lobortis eget, condimentum non velit. Nam tellus sem, fermentum nec vestibulum quis, cursus commodo massa. Nam scelerisque ac nisl ac dictum. Phasellus sed pretium lectus. Nunc elementum tempor dapibus. Vivamus sed nisl arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam justo elit, tempus congue scelerisque at, fermentum non mauris. Phasellus egestas est sit amet enim tempor, eget lacinia ante pharetra. Vivamus vitae est sit amet sem sodales venenatis a vitae velit. 

Donec consequat rutrum nulla, a venenatis odio imperdiet eu.Donec mattis sem et tempus faucibus. Nam a elit in ex fringilla lobortis. Curabitur eget laoreet nunc. Nulla id metus ac sem luctus sodales. Morbi in nunc et enim faucibus egestas et quis metus. Cras eget sollicitudin sapien. Etiam sit amet mi aliquam odio posuere commodo. Nunc scelerisque pharetra felis, sit amet ultrices ligula lacinia at.

Aliquam a posuere orci, vel pharetra libero. Nullam viverra velit eu ligula convallis mattis eget sed mauris. Aliquam at metus porttitor, egestas justo at, maximus magna. In rutrum erat massa, id molestie libero placerat ut. Pellentesque lobortis aliquam felis non pharetra. Aenean finibus quis erat eget tincidunt. Duis placerat facilisis felis, ac sollicitudin sem mattis quis. Nulla luctus, justo et ultricies aliquet, quam leo congue tortor, ac faucibus risus nunc ac ante. Integer id massa molestie, pellentesque purus sit amet, volutpat nisi. Donec elementum libero tellus, vel tincidunt lectus cursus ut. Vestibulum bibendum lacus quis venenatis aliquam. Aenean euismod gravida est a eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu lacus, volutpat et urna efficitur, gravida consectetur orci. Ut rhoncus justo id lectus condimentum luctus. Integer tincidunt consequat tempus.

Nulla semper ex quis ante rutrum, sit amet venenatis risus venenatis. Nam quis pharetra mauris, et mollis leo. Fusce commodo, massa a tempus vestibulum, velit nisl ultrices mauris, pharetra facilisis leo sem a erat. Ut semper blandit sem in pharetra. Curabitur et leo eu elit fringilla placerat. Suspendisse metus mi, blandit ut odio a, lacinia sagittis augue. Donec ut dolor nec nisl eleifend scelerisque. Curabitur laoreet quis turpis a venenatis. Morbi mauris nibh, egestas et odio a, ultrices aliquet lorem. Sed vitae ipsum vel velit tincidunt semper.

Vivamus non venenatis dolor, non luctus justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc non vulputate odio. Ut blandit consectetur lobortis. In quis nibh sodales, accumsan est nec, varius felis. Nunc varius turpis sit amet leo rhoncus euismod. Pellentesque nec velit ut orci iaculis iaculis. Quisque ipsum magna, dapibus sed ante vel, maximus sodales tortor.

Donec gravida sollicitudin libero at vestibulum. Suspendisse dictum, lorem ac ornare porta, neque sapien fringilla sem, sed ornare sapien turpis at diam. Donec eu nisl augue. Morbi commodo ornare urna eu tempor. Suspendisse tempus lacus felis, vitae pretium ante dignissim at. Vivamus diam arcu, bibendum vel pretium at, consequat eget tortor. In gravida mauris at nibh venenatis, vel sollicitudin eros aliquet. Quisque eu dui vel augue finibus fringilla in ut nibh. Cras nec aliquet ante, quis elementum diam. Aliquam et vulputate quam. Integer semper magna sed dictum hendrerit. Curabitur maximus nunc et massa varius consequat eu nec odio.

Mauris at odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus turpis, egestas ut felis sit amet, viverra rutrum justo. Cras facilisis congue lacus nec fringilla. Praesent sodales augue dolor, eget rhoncus tortor semper aliquam. Praesent mattis condimentum ex ut congue. Pellentesque cursus dolor vehicula maximus imperdiet. Curabitur in nunc non augue posuere feugiat. Donec et mi sed enim gravida molestie vehicula nec diam. Praesent ac molestie lacus. Nullam ut lacus lobortis, efficitur metus vitae, blandit sem. Suspendisse sagittis metus sed interdum tincidunt. Ut congue justo ex, quis feugiat nibh porta ac. Duis fermentum odio vel euismod fringilla.

Mauris mi elit, gravida eu leo id, tristique feugiat augue. In hac habitasse platea dictumst. In volutpat ac lacus eget dictum. Aliquam dignissim eget eros at semper. Duis posuere pellentesque congue. Etiam pellentesque efficitur ligula eu semper. In pellentesque erat mauris, quis tempor magna ultricies in. Proin quis porta justo. Donec ante libero, convallis non tortor sed, pulvinar vulputate est. Duis volutpat vitae erat nec hendrerit. Nunc ac finibus quam. In commodo mauris diam, ac gravida elit semper vel. Curabitur sed diam eu velit scelerisque rutrum. Aenean accumsan lacus et quam molestie iaculis vel eu dui.

Suspendisse venenatis magna vitae gravida tempus. Ut vel blandit mauris, ac volutpat nulla. Nullam aliquet non ipsum et sollicitudin. Duis justo erat, elementum sit amet gravida non, maximus gravida nisi. Nunc faucibus nisi in dolor ultrices, eget tristique nunc faucibus. Integer sed dolor vitae est porttitor feugiat id sed orci. Aenean sagittis vel nisl vitae sagittis. Donec ut congue nulla. Suspendisse ultricies metus magna, at luctus magna pulvinar a. Vivamus eu lacus massa. Praesent ex turpis, venenatis molestie eros sit amet, maximus sodales risus.

Nullam convallis, ligula eu sagittis tincidunt, tortor arcu consequat lectus, ac fringilla augue sapien non quam. Aliquam quis aliquam quam. Aliquam eu pulvinar tortor. Vestibulum sed pharetra sem. Duis a tortor at libero porta bibendum. In pharetra pretium quam, tempus efficitur leo lacinia eget. Maecenas diam lacus, pulvinar aliquet nisl non, blandit congue mi.`,
    });
    todoCt++;
  }
  return result;
};
let ct = 0;
export const getTodosAjax = function() {
  return fetch('/data/todos.json?ct=' + ct++).then(response => response.json());
  //return $.ajax('/data/todos.json?ct=' + ct++);
};
