import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
    const gymPriceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Cardio and weight training",
            "Locker room access",
            "Fitness assessment"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "All features of Basic Membership",
            "Group fitness classes",
            "Sauna and spa access",
            "Personal trainer sessions (2x per month)"
          ],
          "price": 49.99
        },
        {
          "id": 3,
          "name": "Family Membership",
          "features": [
            "Access for 2 adults and 2 children",
            "All features of Premium Membership for each member",
            "Childcare services",
            "Nutritional counseling"
          ],
          "price": 89.99
        },
        {
          "id": 4,
          "name": "Student Membership",
          "features": [
            "Access to gym facilities",
            "Cardio and weight training",
            "Locker room access",
            "Valid student ID required"
          ],
          "price": 19.99
        }
      ];
      
      
    return (
        <div className="m-12">
            <span className='text-7xl'>Best Prices in the town</span>
            <div className="grid grid-cols-3 gap-6">
            {
                gymPriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;