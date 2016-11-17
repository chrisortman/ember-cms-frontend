
export default function hasSelector(context, selector, count, message) {

  count = count || 1;
  message = message || `Could not find element "${selector}"`;

  let actual = context.$(selector).get();
  let result = actual.length === count;
  let expected = count;

  this.pushResult({ result, actual, expected, message });
}
