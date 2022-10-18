export class Card {

  render() {
    return `
    <h3 class="fw-bold"> My Cart </h3>
    <div>
      <ul class="list-group" style="margin-top: 1em">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          An item
          <p> 130 zl </p>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">+</a>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">-</a>
          <span class="badge text-bg-info opacity-50 rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          An item
          <p> 60 zl </p>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">+</a>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">-</a>
          <span class="badge text-bg-info opacity-50 rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          An item
          <p> 68 zl </p>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">+</a>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">-</a>
          <span class="badge text-bg-info opacity-50 rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          An item
          <p> 114 zl </p>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">+</a>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">-</a>
          <span class="badge text-bg-info opacity-50 rounded-pill">14</span>
        </li>

      </ul>
      <ul class="list-group ">
        <li class="list-group-item
                   d-flex justify-content-between
                   align-items-center
                   bg-warning
                   bg-opacity-10
                   fw-bold"> Summary: 8 products, 550 zl </li>
    </div>
    `;
  }
}