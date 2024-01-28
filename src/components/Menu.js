import recipes from "../recipes";
import Swal from 'sweetalert2';


function Menu() {

    const handleOrder = (id) => {
        Swal.fire({
            title: "Are you sure to make this order?",
            text: "Please confirm your order!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been submitted.",
                icon: "success"
              });
            }
          });

    }
    return (
        <>
            <div className="food-menu-container">
                <div class="food-menu-header">
                    <h2>This week specials!</h2>
                    <button>Order Menu</button>
                </div>

                <div className="cards">
                    {
                        recipes.map(recipe => <div key={recipe.id} className="food-menu-items">
                            <img src={recipe.image} alt='' />
                            <div className="food-menu-content">
                                <div className="heading">
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.price}</p>
                                </div>
                                <p>{recipe.description}</p>
                                <button className="orderBtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Menu;
