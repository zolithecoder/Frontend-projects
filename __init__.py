import unittest


def add(x, y):
    return x + y


class TestAddFunction(unittest.TestCase):
    def test_add_positive_numbers(self):
        self.assertEqual(add(2, 3), 5)

    def test_add_negative_numbers(self):
        self.assertEqual(add(-2, -3), -5)

    def test_add_zero(self):
        self.assertEqual(add(0, 0), 0)

    def test_add_raises_exception_if_not_numbers(self):
        with self.assertRaises(TypeError):
            add("hello", 3)


if __name__ == '__main__':
    unittest.main()
