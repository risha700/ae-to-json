module.exports = function(t) {
  var json = global.jsonFromAE;
  var compositions = json.project.items.filter(function(item) {
    return item.typeName === 'Composition';
  });

  t.ok(compositions, 'we have compositions');
  t.deepEqual(compositions.map(getCompNames), [ 'Test-DifferentFootage', 'Test-Comp-Static', 'Test-Comp-Blank', 'Test-Comp-Animated' ], 'Received compositions');

  compositions
  .forEach(function(composition) {
    t.ok(composition.layers !== undefined, composition.name + ' had layers');
    t.ok(composition.duration !== undefined, composition.name + ' had a duration');
  });

  t.end();
};

function getCompNames(comp) {
  return comp.name;
}