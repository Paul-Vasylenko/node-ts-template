import Schema from 'schemas';

export default Schema.object()
  .shape({
    firstName: Schema.string().required(),
  })
  .strict();
