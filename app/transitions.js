export default function() {
  this.transition(
    this.fromRoute('about'),
    this.toRoute('feed', 'projects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('feed'),
    this.toRoute('projects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
