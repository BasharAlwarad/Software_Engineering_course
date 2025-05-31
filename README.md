# 🍳 Teaching Pseudocode Through a Kitchen Cooking Scenario

Welcome! This project introduces the **concept of pseudocode** by using a fun and relatable real-life scenario: **cooking in the kitchen**.

## 📘 What is Pseudocode?

**Pseudocode** is a way to describe an algorithm or process in **plain language** that’s **not tied to any specific programming language**. It's like writing down a **step-by-step plan** to solve a problem before converting it into real code.

- It helps you **think logically**.
- It makes it easier to **communicate ideas** with others.
- It focuses on the **structure of the solution**, not the syntax.

> 💡 Think of pseudocode as the blueprint before building the actual house (your code).

---

## 🍝 Scenario: Cooking Spaghetti

Let’s learn pseudocode by writing down the steps to cook a simple meal: **Spaghetti with tomato sauce**.

---

### 👨‍🍳 Real-World Recipe Steps

1. Go to the kitchen.
2. Gather ingredients: spaghetti, salt, water, tomato sauce, olive oil.
3. Fill a pot with water.
4. Add a pinch of salt.
5. Bring water to a boil.
6. Add spaghetti to boiling water.
7. Cook spaghetti for 10 minutes.
8. Drain the spaghetti.
9. Heat tomato sauce in a pan.
10. Mix spaghetti with the sauce.
11. Serve the dish on a plate.
12. Enjoy your meal!

---

### 💻 Pseudocode Version

```text
START

GO to kitchen
GATHER ingredients: spaghetti, salt, water, tomato sauce, olive oil

FILL pot with water
ADD salt to pot
HEAT pot until water boils

ADD spaghetti to boiling water
WAIT for 10 minutes

DRAIN spaghetti

POUR tomato sauce into pan
HEAT tomato sauce

MIX spaghetti with tomato sauce

SERVE spaghetti on plate

END
```

## 🔁 Example with a Condition and Loop

```text
START

GATHER ingredients

IF water is not boiling THEN
HEAT water
END IF

ADD spaghetti to boiling water

SET timer = 10
WHILE timer > 0 DO
WAIT 1 minute
STIR spaghetti
DECREASE timer by 1
END WHILE

DRAIN spaghetti
HEAT tomato sauce
MIX spaghetti with sauce
SERVE
END
```

## 🔧 Pseudocode as Functions

## Let’s turn our pseudocode actions into **functions**.

### 🧺 `GATHER()`

```text
FUNCTION GATHER(ingredients)
    FOR EACH item IN ingredients DO
        PRINT "Got " + item
    END FOR
END FUNCTION
```

### ✅ `END()`

```text
FUNCTION END()
    PRINT "stop process!"
END FUNCTION
```

### ➕ `ADD()`

```text
FUNCTION ADD(item, location)
    PRINT "Adding " + item + " to " + location
END FUNCTION
```

### 🔢 `SET()`

```text
FUNCTION SET(variable, value)
    PRINT "Setting " + variable + " to " + value
END FUNCTION
```

### 🔁 `WHILE()`

```text
FUNCTION WHILE(condition, action)
    WHILE condition IS TRUE DO
        EXECUTE action
    END WHILE
END FUNCTION
```

### ⏱️ `WAIT()`

```text
FUNCTION WAIT(minutes)
    PRINT "Waiting for " + minutes + " minute(s)..."
    // Simulate a delay
END FUNCTION
```

### 🥄 `STIR()`

```text
FUNCTION STIR(item)
    PRINT "Stirring the " + item
END FUNCTION
```

### ➖ `DECREASE()`

```text
FUNCTION DECREASE(variable, amount)
    PRINT "Decreasing " + variable + " by " + amount
    variable = variable - amount
    RETURN variable
END FUNCTION
```

### 🍽️ `SERVE()`

```text
FUNCTION SERVE(dish)
    PRINT "Serving " + dish + " on the plate. Bon appétit!"
END FUNCTION
```

### 🧪 Example of Function Usage

```text
GATHER(["spaghetti", "salt", "water", "sauce"])
ADD("water", "pot")
ADD("salt", "pot")
SET("timer", 10)

WHILE(timer > 0)
    WAIT(1)
    STIR("spaghetti")
    timer = DECREASE(timer, 1)
END WHILE

DRAIN("spaghetti")
MIX("spaghetti", "sauce")
SERVE("spaghetti")
END()

```

## final version with python

```py
def GATHER(ingredients):
    for item in ingredients:
        print(f"Got {item}")

def ADD(item, location):
    print(f"Adding {item} to {location}")

def SET(variable_name, value):
    print(f"Setting {variable_name} to {value}")
    return value

def WHILE(condition_func, action_func):
    while condition_func():
        action_func()

def WAIT(minutes):
    print(f"Waiting for {minutes} minute(s)...")
    # Simulate wait (e.g., time.sleep in real code)
    # time.sleep(minutes * 60)

def STIR(item):
    print(f"Stirring the {item}")

def DECREASE(variable, amount):
    print(f"Decreasing value by {amount}")
    return variable - amount

def DRAIN(item):
    print(f"Draining {item}")

def MIX(item1, item2):
    print(f"Mixing {item1} with {item2}")

def SERVE(dish):
    print(f"Serving {dish} on the plate. Bon appétit!")

def END():
    print("All steps are complete. Enjoy your meal!")

# --- Example of Usage ---

# Step 1: Gather ingredients
GATHER(["spaghetti", "salt", "water", "sauce"])

# Step 2: Add water and salt
ADD("water", "pot")
ADD("salt", "pot")

# Step 3: Set a timer
timer = SET("timer", 10)

# Step 4: Simulate a WHILE loop
def condition():
    return timer_container[0] > 0

def action():
    WAIT(1)
    STIR("spaghetti")
    timer_container[0] = DECREASE(timer_container[0], 1)

# Use a list to allow inner function to mutate outer variable
timer_container = [timer]
WHILE(condition, action)

# Step 5: Finish the process
DRAIN("spaghetti")
MIX("spaghetti", "sauce")
SERVE("spaghetti")
END()


```
